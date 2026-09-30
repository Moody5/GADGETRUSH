const fs = require("fs");
const vm = require("vm");

const script = fs.readFileSync("../script.js", "utf8");

const start = script.indexOf("let phones = [");

const end = script.indexOf("];", start);

if (start === -1 || end === -1) {
    console.log("Could not find the phones array.");
    process.exit(1);
}

let phonesText = script.substring(
    start + "let phones = ".length,
    end + 1
);

let phones;

try {
    phones = vm.runInNewContext(
        phonesText
    );
} catch (error) {
    console.error(
        "Could not read the phones array."
    );

    console.error(error.message);

    process.exit(1);
}

let existingProducts = fs.existsSync("products.json")
    ? JSON.parse(fs.readFileSync("products.json", "utf8"))
    : [];

let products = phones.map(function(phone) {
    let savedProduct = existingProducts.find(function(product) {
        return product.id === phone.id;
    });

    return {
        id: phone.id,
        name: phone.name,
        brand: phone.brand,
        price: savedProduct ? savedProduct.price : phone.price,
        discount: savedProduct ? savedProduct.discount : phone.discount,
        stock: savedProduct ? Number(savedProduct.stock) || 0 : Number(phone.stock) || 0,
        image: phone.image
    };
});

existingProducts.forEach(function(product) {
    let alreadyIncluded = products.some(function(existingProduct) {
        return existingProduct.id === product.id;
    });

    if (!alreadyIncluded) {
        products.push(product);
    }
});

fs.writeFileSync(
    "products.json",
    JSON.stringify(products, null, 4)
);

console.log(
    "products.json created successfully."
);

console.log(
    "Products found:",
    products.length
);