const adminApiUrl = "http://localhost:3000";
let adminProducts = [];

function escapeAdminHTML(value) {
    return String(value || "").replace(/[&<>"']/g, function(character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}


async function loadAdminProducts() {

    let status = document.getElementById("productsStatus");
    let productsList = document.getElementById("productsList");

    try {
        let response = await fetch(adminApiUrl + "/products");
        if (!response.ok) {
            throw new Error("Product request failed.");
        }

        adminProducts = await response.json();
        status.textContent = adminProducts.length + " products";
        document.getElementById("totalProducts").textContent =
            adminProducts.length;
        renderAdminProducts();
    } catch (error) {
        status.textContent = "Could not connect to the product service.";
        productsList.innerHTML =
            '<tr><td colspan="5">Start the backend service to manage products.</td></tr>';
    }

}


function renderAdminProducts() {

    let productsList = document.getElementById("productsList");
    productsList.innerHTML = "";

    adminProducts.forEach(function(product) {
        let row = document.createElement("tr");
        row.dataset.productId = product.id;
        let identity = document.createElement("td");
        identity.className = "product-identity";
        let productId = document.createElement("strong");
        productId.textContent = "#" + product.id;
        let productName = document.createElement("span");
        productName.textContent = product.name || "Product " + product.id;
        identity.append(productId, productName);
        row.innerHTML = `
            <td>$${Number(product.price).toFixed(2)}</td>
            <td>${Number(product.discount)}%</td>
            <td>${Number(product.stock) || 0}</td>
            <td><button class="product-action product-edit" type="button">Edit</button></td>
        `;
        row.prepend(identity);
        row.querySelector(".product-edit").addEventListener("click", function() {
            editAdminProduct(product.id);
        });
        productsList.appendChild(row);
    });

}


function editAdminProduct(productId) {

    let product = adminProducts.find(function(item) {
        return item.id === productId;
    });
    let row = document.querySelector(
        '#productsList tr[data-product-id="' + productId + '"]'
    );

    if (!product || !row) {
        return;
    }

    row.innerHTML = `
        <td>${product.id}</td>
        <td><input aria-label="Price" type="number" min="0" step="0.01" value="${product.price}"></td>
        <td><input aria-label="Discount percent" type="number" min="0" max="100" step="1" value="${product.discount}"></td>
        <td><input aria-label="Stock" type="number" min="0" step="1" value="${Number(product.stock) || 0}"></td>
        <td>
            <button class="product-action product-save" type="button">Save</button>
            <button class="product-action product-cancel" type="button">Cancel</button>
        </td>
    `;

    row.querySelector(".product-save").addEventListener("click", function() {
        saveAdminProduct(productId, row);
    });
    row.querySelector(".product-cancel").addEventListener("click", renderAdminProducts);

}


async function saveAdminProduct(productId, row) {

    let inputs = row.querySelectorAll("input");
    let values = {
        price: Number(inputs[0].value),
        discount: Number(inputs[1].value),
        stock: Number(inputs[2].value)
    };

    if (
        !Number.isFinite(values.price) || values.price < 0 ||
        !Number.isFinite(values.discount) || values.discount < 0 || values.discount > 100 ||
        !Number.isInteger(values.stock) || values.stock < 0
    ) {
        showAdminNotification("Enter a valid price, discount, and whole-number stock.");
        return;
    }

    try {
        let response = await fetch(adminApiUrl + "/products/" + productId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        });
        let result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Could not save product.");
        }

        showAdminNotification("Product updated.");
        await loadAdminProducts();
    } catch (error) {
        showAdminNotification(error.message || "Could not save product.");
    }

}


async function addAdminProduct(event) {

    event.preventDefault();
    let form = event.currentTarget;
    let values = Object.fromEntries(new FormData(form).entries());
    values.price = Number(values.price);
    values.discount = Number(values.discount);
    values.stock = Number(values.stock);

    try {
        let response = await fetch(adminApiUrl + "/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        });
        let result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Could not add product.");
        }

        form.reset();
        showAdminNotification(
            "Added #" + result.product.id + " " + result.product.name + "."
        );
        await loadAdminProducts();
    } catch (error) {
        showAdminNotification(error.message || "Could not add product.");
    }

}


async function loadAdminOrders() {

    let ordersStatus = document.getElementById("ordersStatus");
    let adminKey = document.getElementById("adminApprovalKey").value.trim();

    if (!adminKey) {
        ordersStatus.textContent = "Enter the key configured in backend/.env to load orders.";
        return;
    }

    sessionStorage.setItem("gadgetRushAdminApprovalKey", adminKey);
    ordersStatus.textContent = "Loading orders...";

    try {
        let response = await fetch(adminApiUrl + "/orders", {
            headers: { "x-admin-key": adminKey }
        });
        let result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Could not load orders.");
        }

        ordersStatus.textContent = result.length + " orders";
        displayAdminOrders(result);
        updateDashboardStats(result);
    } catch (error) {
        ordersStatus.textContent = error.message || "Could not load orders.";
        document.getElementById("ordersList").innerHTML = "";
    }

}


function displayAdminOrders(orders) {

    let ordersList = document.getElementById("ordersList");
    if (orders.length === 0) {
        ordersList.innerHTML = "<p>No orders yet.</p>";
        return;
    }

    ordersList.innerHTML = "";
    orders.forEach(function(order) {
        let customer = order.customer || {};
        let itemSummary = (order.items || []).map(function(item) {
            return escapeAdminHTML(item.name || "Product") +
                " x " + (Number(item.quantity) || 1);
        }).join(", ");
        let total = order.amountNgn
            ? "NGN " + Number(order.amountNgn).toLocaleString("en-NG", { minimumFractionDigits: 2 })
            : "$" + Number(order.total || 0).toFixed(2);
        let orderCard = document.createElement("div");
        orderCard.classList.add("admin-order");
        orderCard.innerHTML = `
            <div class="admin-order-header">
                <h3>${escapeAdminHTML(order.orderNumber || "Order")}</h3>
                <span class="admin-order-status">${escapeAdminHTML(order.status || order.paymentStatus || "Pending")}</span>
            </div>
            <div class="admin-order-info">
                <p><strong>Customer:</strong><br>${escapeAdminHTML(customer.name || "Customer")}<br>${escapeAdminHTML(customer.email || order.customerEmail || "Unknown")}<br>${escapeAdminHTML(customer.phone || "")}</p>
                <p><strong>Total:</strong><br>${total}</p>
                <p><strong>Delivery:</strong><br>${escapeAdminHTML(order.delivery && order.delivery.city || "Not provided")}</p>
                <p><strong>Items:</strong><br>${itemSummary || "0"}</p>
            </div>
            <div class="admin-order-actions">
                ${order.status === "Pending approval"
                    ? `<button class="product-action product-save approve-order" type="button" data-order-number="${escapeAdminHTML(order.orderNumber)}">Approve payment</button>`
                    : order.status === "Approved" && !order.approvalEmailSentAt
                        ? `<span>Approval email not sent.</span><button class="product-action product-cancel retry-approval-email" type="button" data-order-number="${escapeAdminHTML(order.orderNumber)}">Retry email</button>`
                        : order.status === "Approved"
                            ? "Approval email sent"
                    : order.status === "Awaiting payment"
                        ? "Waiting for customer transfer"
                        : ""}
            </div>
        `;
        ordersList.appendChild(orderCard);
    });

    document.querySelectorAll(".approve-order").forEach(function(button) {
        button.addEventListener("click", function() {
            approveAdminOrder(button.dataset.orderNumber);
        });
    });
    document.querySelectorAll(".retry-approval-email").forEach(function(button) {
        button.addEventListener("click", function() {
            resendApprovalEmail(button.dataset.orderNumber);
        });
    });

}


async function approveAdminOrder(orderNumber) {

    try {
        let response = await fetch(
            adminApiUrl + "/orders/" + encodeURIComponent(orderNumber) + "/approve",
            {
                method: "POST",
                headers: {
                    "x-admin-key": sessionStorage.getItem("gadgetRushAdminApprovalKey") || ""
                }
            }
        );
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Could not approve order.");
        }

        showAdminNotification(
            result.emailSent
                ? "Payment approved and customer email sent."
                : "Payment approved, but the customer email failed. Use Retry email after checking EmailJS."
        );
        await loadAdminOrders();
    } catch (error) {
        showAdminNotification(error.message || "Could not approve order.");
    }

}


async function resendApprovalEmail(orderNumber) {

    try {
        let response = await fetch(
            adminApiUrl + "/orders/" + encodeURIComponent(orderNumber) + "/approval-email",
            {
                method: "POST",
                headers: {
                    "x-admin-key": sessionStorage.getItem("gadgetRushAdminApprovalKey") || ""
                }
            }
        );
        let result = await response.json();
        if (!response.ok) {
            throw new Error(result.message || "Could not send approval email.");
        }

        showAdminNotification("Approval email sent to the customer.");
        await loadAdminOrders();
    } catch (error) {
        showAdminNotification(error.message || "Could not send approval email.");
    }

}


function updateDashboardStats(orders) {

    document.getElementById("totalOrders").textContent = orders.length;

    let totalSalesNgn = 0;
    let customers = [];
    orders.forEach(function(order) {
        if (order.status === "Approved" || order.paymentStatus === "Paid") {
            totalSalesNgn += order.amountNgn
                ? Number(order.amountNgn)
                : (Number(order.total) || 0) * 1500;
        }

        let email = order.customer ? order.customer.email : order.customerEmail;
        if (email && !customers.includes(email)) {
            customers.push(email);
        }
    });

    document.getElementById("totalSales").textContent =
        "₦" + totalSalesNgn.toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    document.getElementById("totalCustomers").textContent = customers.length;

}


function showAdminNotification(
    message
) {

    let notification =
        document.createElement(
            "div"
        );


    notification.className =
        "admin-notification";


    notification.textContent =
        message;


    document.body.appendChild(
        notification
    );


    setTimeout(
        function() {

            notification.remove();

        },
        3000
    );

}


document.getElementById("addProductForm").addEventListener(
    "submit",
    addAdminProduct
);

let adminApprovalKeyInput = document.getElementById("adminApprovalKey");
adminApprovalKeyInput.value =
    sessionStorage.getItem("gadgetRushAdminApprovalKey") || "";
document.getElementById("loadOrdersBtn").addEventListener("click", loadAdminOrders);
document.getElementById("logoutAdmin").addEventListener("click", function() {
    sessionStorage.removeItem("gadgetRushAdminApprovalKey");
    adminApprovalKeyInput.value = "";
    document.getElementById("ordersList").innerHTML = "";
    document.getElementById("ordersStatus").textContent = "Admin key cleared.";
});

loadAdminProducts();
loadAdminOrders();