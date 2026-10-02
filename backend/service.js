const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

const productsFile = process.env.PRODUCTS_FILE ||
    path.join(__dirname, "products.json");
const ordersFile = process.env.ORDERS_FILE || path.join(__dirname, "orders.json");
const emailJsServiceId = process.env.EMAILJS_SERVICE_ID || "service_2792191";
const emailJsTemplateId = process.env.EMAILJS_TEMPLATE_ID || "template_ygy8pxs";
const emailJsPublicKey = process.env.EMAILJS_PUBLIC_KEY || "8ce9wGoCNsJzZwQX-";

const app = express();

app.use(cors());

app.use(express.json());

async function readOrders() {

    let { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        throw error;
    }

    return data.map(function(row) {

        return {
            orderNumber: row.order_number,
            status: row.status,
            paymentStatus: row.payment_status,
            paymentMethod: row.payment_method,

            customer: {
                name: row.customer_name,
                email: row.customer_email,
                phone: row.customer_phone
            },

            customerAccessKeyHash:
                row.customer_access_key_hash,

            delivery: {
                country: row.customer_country,
                city: row.customer_city,
                address: row.customer_address,
                postalCode: row.customer_postal,
                notes: row.customer_notes
            },

            items: row.items || [],

            total: Number(row.total || 0),
            amountNgn: Number(row.amount_ngn || 0),
            deliveryFee: Number(row.delivery_fee || 0),

            createdAt: row.created_at,
            expiresAt: row.expires_at,

            paymentSubmittedAt:
                row.payment_submitted_at || null,

            approvedAt:
                row.approved_at || null,

            approvalEmailSentAt:
                row.approval_email_sent_at || null
        };

    });
}


async function writeOrders(orders) {

    for (let order of orders) {

        let { error } = await supabase
            .from("orders")
            .upsert({
                order_number: order.orderNumber,

                status: order.status,
                payment_status: order.paymentStatus,
                payment_method: order.paymentMethod,

                customer_name: order.customer.name,
                customer_email: order.customer.email,
                customer_phone: order.customer.phone,

                customer_country: order.delivery.country,
                customer_city: order.delivery.city,
                customer_address: order.delivery.address,
                customer_postal: order.delivery.postalCode,
                customer_notes: order.delivery.notes,

                customer_access_key_hash:
                    order.customerAccessKeyHash,

                items: order.items,

                total: order.total,
                amount_ngn: order.amountNgn,
                delivery_fee: order.deliveryFee,

                created_at: order.createdAt,
                expires_at: order.expiresAt,

                payment_sent_at:
                    order.paymentSubmittedAt || null,

                approved_at:
                    order.approvedAt || null,

                approval_email_sent_at:
                    order.approvalEmailSentAt || null
            }, {
                onConflict: "order_number"
            });

        if (error) {
            throw error;
        }
    }
}

function hashCustomerAccessKey(accessKey) {
    return crypto.createHash("sha256").update(accessKey).digest("hex");
}

function hasCustomerOrderAccess(order, accessKey) {
    if (!order.customerAccessKeyHash || accessKey.length < 32) {
        return false;
    }

    let storedHash = Buffer.from(order.customerAccessKeyHash);
    let suppliedHash = Buffer.from(hashCustomerAccessKey(accessKey));
    return storedHash.length === suppliedHash.length &&
        crypto.timingSafeEqual(storedHash, suppliedHash);
}

function publicOrder(order) {
    let result = Object.assign({}, order);
    delete result.customerAccessKeyHash;
    return result;
}

async function sendAndRecordApprovalEmail(orders, order) {

    if (order.approvalEmailSentAt) {
        return {
            sent: true,
            alreadySent: true
        };
    }

    try {

        await sendApprovalEmail(order);

        order.approvalEmailSentAt = new Date().toISOString();

    await writeOrders(orders);

        return {
            sent: true,
            alreadySent: false
        };

    } catch (error) {

        console.error(
            "APPROVAL EMAIL ERROR:",
            error.message
        );

        return {
            sent: false,
            message: error.message
        };
    }
}



async function sendApprovalEmail(order) {

    let customer = order.customer || {};

    let amountNgn = Number(order.amountNgn || 0).toLocaleString("en-NG", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    let items = (order.items || [])
        .map(function(item) {
            return item.name + " x " + item.quantity;
        })
        .join("\n");

    let response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                service_id: emailJsServiceId,
                template_id: emailJsTemplateId,
                user_id: emailJsPublicKey,

                template_params: {
                    subject:
                        "GadgetRush payment approved - " +
                        order.orderNumber,

                    customer_name:
                        customer.name || "Customer",

                    customer_email:
                        customer.email || "",

                    to_email:
                        customer.email || "",

                    order_number:
                        order.orderNumber,

                    payment_method:
                        "Bank transfer",

                    payment_status:
                        "Approved",

                    approval_message:
                        "Your bank transfer has been approved. Your order is now confirmed.",

                    order_items:
                        items,

                    total:
                        "NGN " + amountNgn,

                    total_ngn:
                        "NGN " + amountNgn
                }
            })
        }
    );

    if (!response.ok) {

        let errorText = await response.text();

        throw new Error(
            "EmailJS request failed (" +
            response.status +
            "): " +
            errorText
        );
    }

    console.log(
        "EMAILJS: Approval email sent successfully for " +
        order.orderNumber
    );

    return true;
}




function requireAdmin(req, res) {
    let expectedKey = process.env.ADMIN_APPROVAL_KEY || "";
    let providedKey = req.get("x-admin-key") || "";

    if (!expectedKey) {
        res.status(503).json({
            success: false,
            message: "Set ADMIN_APPROVAL_KEY in backend/.env to enable admin order actions."
        });
        return false;
    }

    let expectedBuffer = Buffer.from(expectedKey);
    let providedBuffer = Buffer.from(providedKey);
    if (
        expectedBuffer.length !== providedBuffer.length ||
        !crypto.timingSafeEqual(expectedBuffer, providedBuffer)
    ) {
        res.status(401).json({ success: false, message: "Admin key is missing or incorrect." });
        return false;
    }

    return true;
}


app.get("/", function(req, res) {

    res.send(
        "GadgetRush backend is running!"
    );

});

app.get("/products", function(req, res) {

    try {
        let products = JSON.parse(
            fs.readFileSync(productsFile, "utf8")
        );

        res.json(products.map(function(product) {
            return Object.assign({ stock: 0 }, product);
        }));
    } catch (error) {
        console.error("PRODUCT LOAD ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Could not load products."
        });
    }

});

app.post("/products", function(req, res) {

    let name = String(req.body.name || "").trim();
    let brand = String(req.body.brand || "").trim();
    let price = Number(req.body.price);
    let discount = Number(req.body.discount);
    let stock = Number(req.body.stock);
    let image = String(req.body.image || "").trim();
    let imageUrl;

    try {
        imageUrl = new URL(image);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Enter a valid product image URL."
        });
    }

    if (
        !name || name.length > 80 ||
        !brand || brand.length > 50 ||
        !Number.isFinite(price) || price < 0 ||
        !Number.isFinite(discount) || discount < 0 || discount > 100 ||
        !Number.isInteger(stock) || stock < 0 ||
        !["http:", "https:"].includes(imageUrl.protocol)
    ) {
        return res.status(400).json({
            success: false,
            message: "Enter a name, brand, valid price, discount, stock, and HTTP image URL."
        });
    }

    try {
        let products = JSON.parse(
            fs.readFileSync(productsFile, "utf8")
        );
        let product = {
            id: products.reduce(function(maxId, item) {
                return Math.max(maxId, Number(item.id) || 0);
            }, 0) + 1,
            name: name,
            brand: brand,
            price: price,
            discount: discount,
            stock: stock,
            image: image
        };

        products.push(product);
        fs.writeFileSync(
            productsFile,
            JSON.stringify(products, null, 4)
        );

        res.status(201).json({ success: true, product: product });
    } catch (error) {
        console.error("PRODUCT CREATE ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Could not add product."
        });
    }

});

app.put("/products/:id", function(req, res) {

    let productId = Number(req.params.id);
    let price = Number(req.body.price);
    let discount = Number(req.body.discount);
    let stock = Number(req.body.stock);

    if (
        !Number.isInteger(productId) ||
        !Number.isFinite(price) || price < 0 ||
        !Number.isFinite(discount) || discount < 0 || discount > 100 ||
        !Number.isInteger(stock) || stock < 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Enter a valid price, discount, and whole-number stock."
        });
    }

    try {
        let products = JSON.parse(
            fs.readFileSync(productsFile, "utf8")
        );
        let product = products.find(function(item) {
            return item.id === productId;
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found."
            });
        }

        product.price = price;
        product.discount = discount;
        product.stock = stock;

        fs.writeFileSync(
            productsFile,
            JSON.stringify(products, null, 4)
        );

        res.json({ success: true, product: product });
    } catch (error) {
        console.error("PRODUCT UPDATE ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Could not save product changes."
        });
    }

});

app.post("/orders", async function(req, res) {

    try {
        let body = req.body;
        let customer = body.customer || {};
        let delivery = body.delivery || {};
        let requestedItems = body.items;
        let customerAccessKey = String(customer.accessKey || "");

        if (
            !customer.name || !customer.email || !customer.phone ||
            customerAccessKey.length < 32 ||
            !Array.isArray(requestedItems) || requestedItems.length === 0
        ) {
            return res.status(400).json({
                success: false,
                message: "Customer details and at least one item are required."
            });
        }

        let products = JSON.parse(fs.readFileSync(productsFile, "utf8"));
        let subtotal = 0;
        let items = requestedItems.map(function(item) {
            let product = products.find(function(candidate) {
                return candidate.id === Number(item.id);
            });
            let quantity = Number(item.quantity);

            if (!product || !Number.isInteger(quantity) || quantity < 1) {
                throw new Error("An order item is invalid.");
            }

            let price = Number(product.price) * (1 - Number(product.discount) / 100);
            subtotal += price * quantity;

            return {
                id: product.id,
                name: product.name,
                image: product.image,
                quantity: quantity,
                price: price
            };
        });

        let deliveryFee = 10;
        let total = Number((subtotal + deliveryFee).toFixed(2));
        let createdAt = new Date();
        let expiresAt = new Date(createdAt.getTime() + 15 * 60 * 1000);
        let order = {
            orderNumber: "GR-" + Date.now() + "-" + crypto.randomBytes(2).toString("hex"),
            status: "Awaiting payment",
            paymentStatus: "Pending",
            paymentMethod: "Bank transfer",
            customer: {
                name: String(customer.name).trim(),
                email: String(customer.email).trim().toLowerCase(),
                phone: String(customer.phone).trim()
            },
            customerAccessKeyHash: hashCustomerAccessKey(customerAccessKey),
            delivery: {
                country: String(delivery.country || "").trim(),
                city: String(delivery.city || "").trim(),
                address: String(delivery.address || "").trim(),
                postalCode: String(delivery.postalCode || "").trim(),
                notes: String(delivery.notes || "").trim()
            },
            items: items,
            subtotal: Number(subtotal.toFixed(2)),
            deliveryFee: deliveryFee,
            total: total,
            amountNgn: Number((total * 1500).toFixed(2)),
            currency: "NGN",
            createdAt: createdAt.toISOString(),
            expiresAt: expiresAt.toISOString()
        };

       let orders = await readOrders();
orders.unshift(order);
await writeOrders(orders);

        res.status(201).json({ success: true, order: publicOrder(order) });
    } catch (error) {
        console.error("ORDER CREATION ERROR:", error);
        res.status(400).json({
            success: false,
            message: error.message || "Could not create order."
        });
    }

});

app.get("/orders", async function(req, res) {

    try {
        let orders = await readOrders();

        let changed = false;
        orders.forEach(function(order) {
            if (
                order.status === "Awaiting payment" &&
                Date.now() >= Date.parse(order.expiresAt)
            ) {
                order.status = "Expired";
                changed = true;
            }
        });
        if (changed) {
            await writeOrders(orders);
        }

        if (req.query.email) {
            let accessKey = req.get("x-customer-order-key") || "";
            if (accessKey.length < 32) {
                return res.status(401).json({
                    success: false,
                    message: "Customer order access key is missing."
                });
            }
            orders = orders.filter(function(order) {
                return hasCustomerOrderAccess(order, accessKey);
            });
            return res.json(orders.map(publicOrder));
        }

        if (!requireAdmin(req, res)) {
            return;
        }

        res.json(orders.map(publicOrder));
    } catch (error) {
        console.error("ORDER LOAD ERROR:", error);
        res.status(500).json({ success: false, message: "Could not load orders." });
    }

});

app.post("/orders/:orderNumber/payment-sent", async function(req, res) {

    try {
        let orders = await readOrders();
        let order = orders.find(function(item) {
            return item.orderNumber === req.params.orderNumber;
        });

        let accessKey = String(req.body.accessKey || "");
        if (!order || !hasCustomerOrderAccess(order, accessKey)) {
            return res.status(404).json({ success: false, message: "Order not found." });
        }

        if (order.status === "Awaiting payment" && Date.now() >= Date.parse(order.expiresAt)) {
            order.status = "Expired";
            await writeOrders(orders);
            return res.status(410).json({ success: false, message: "The payment window has expired." });
        }

        if (order.status !== "Awaiting payment") {
            return res.status(409).json({ success: false, message: "This order is not awaiting payment." });
        }

        order.status = "Pending approval";
        order.paymentSubmittedAt = new Date().toISOString();
       await writeOrders(orders);
        res.json({ success: true, order: publicOrder(order) });
    } catch (error) {
        console.error("PAYMENT SUBMISSION ERROR:", error);
        res.status(500).json({ success: false, message: "Could not update payment status." });
    }

});

app.post("/orders/:orderNumber/approve", async function(req, res) {

    if (!requireAdmin(req, res)) {
        return;
    }

    try {
        let orders = await readOrders();
        let order = orders.find(function(item) {
            return item.orderNumber === req.params.orderNumber;
        });

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found." });
        }
        if (order.status !== "Pending approval") {
            return res.status(409).json({ success: false, message: "Only submitted transfers can be approved." });
        }

        order.status = "Approved";
        order.paymentStatus = "Approved";
        order.approvedAt = new Date().toISOString();
        await writeOrders(orders);
        let emailResult = await sendAndRecordApprovalEmail(orders, order);
        res.json({
            success: true,
            order: publicOrder(order),
            emailSent: emailResult.sent,
            emailMessage: emailResult.sent
                ? (emailResult.alreadySent ? "Approval email was already sent." : "Approval email sent.")
                : "Order approved, but the approval email could not be sent."
        });
    } catch (error) {
        console.error("ORDER APPROVAL ERROR:", error);
        res.status(500).json({ success: false, message: "Could not approve order." });
    }

});

app.post("/orders/:orderNumber/approval-email", async function(req, res) {

    if (!requireAdmin(req, res)) {
        return;
    }

    try {
        let orders = await readOrders();
        let order = orders.find(function(item) {
            return item.orderNumber === req.params.orderNumber;
        });

        if (!order) {
            return res.status(404).json({ success: false, message: "Order not found." });
        }
        if (order.status !== "Approved") {
            return res.status(409).json({ success: false, message: "Approve the order before sending its approval email." });
        }

        let emailResult = await sendAndRecordApprovalEmail(orders, order);
        if (!emailResult.sent) {
            return res.status(502).json({
                success: false,
                message: "Order is approved, but EmailJS could not send the message. Check the EmailJS template and configuration."
            });
        }

        res.json({ success: true, emailSent: true, order: publicOrder(order) });
    } catch (error) {
        console.error("APPROVAL EMAIL RETRY ERROR:", error);
        res.status(500).json({ success: false, message: "Could not resend approval email." });
    }

});

app.get(
    "/test",
    function(req, res) {
        res.json({
            success: true,
            message: "GadgetRush frontend can reach the backend!"
        });
    }
);

if (require.main === module) {

    let port = Number(process.env.PORT) || 3000;

    app.listen(port, function() {

        console.log(
            "GadgetRush backend running on port " + port
        );

    });

}

module.exports = app;
