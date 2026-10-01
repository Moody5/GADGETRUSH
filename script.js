// =====================================================
// GADGETRUSH
// =====================================================
    let currentUser =
    JSON.parse(
        localStorage.getItem(
            "gadgetRushCurrentUser"
        )
    );


// =====================================================
// LANGUAGE
// =====================================================

let currentLanguage =
    localStorage.getItem("gadgetRushLanguage") || "en";

let exchangeRate = 0.86;

let currentCurrency = "NGN";


let translations = {

    en: {

        cart: "Cart",
        limited: "LIMITED TIME OFFER",
        heroText:
            "Premium smartphones at incredible prices. Grab your favorite device before it's gone.",

        shopNow: "Shop Now",
        specialOffer:
    "🔥 SPECIAL OFFER",

        promoTitle:
            "HUGE SMARTPHONE SALE",

        promoText:
            "Up to 70% OFF selected phones",

        phones:
            "Smartphones",

        choosePhone:
            "Choose from our large collection of smartphones.",

        allBrands:
            "All Brands",

        search:
            "Search phones...",

        recentDelivery:
            "🚚 Recently Delivered",

        demoDelivery:
            "Example delivery activity",

        footerText:
            "Smartphone deals made simple.",

        grabOffer:
            "Grab The Offer",

        popupText:
            "Grab this exclusive promotional offer before it's gone!",

        yourCart:
            "Your Cart",

        total:
            "Total",

        checkout:
            "Checkout",

        checkoutTitle:
            "Delivery & Verification",

        checkoutText:
            "Please enter your details so we can process your order.",

        fullName:
            "Full Name",

        email:
            "Email",

        phone:
            "Phone Number",

        country:
            "Country",

        city:
            "City",

        address:
            "Address",

        postal:
            "Postal Code",

        notes:
            "Delivery Notes",

        placeOrder:
            "Place Order",

        orderSuccess:
            "Order Submitted!",

        successText:
            "Your order has been sent successfully. We will contact you with the next step.",

        continueShopping:
            "Continue Shopping",

        inStock:
            "In Stock",

        almostSoldOut:
            "Almost Sold Out",

        left:
            "left",

        addCart:
            "Add to Cart",

        phonesFound:
            "phones"

    },


    de: {

        cart: "Warenkorb",

        limited:
            "ANGEBOT FÜR KURZE ZEIT",

        heroText:
            "Premium-Smartphones zu unglaublichen Preisen. Sichern Sie sich Ihr Lieblingsgerät.",

        shopNow:
            "Jetzt einkaufen",

            specialOffer:
    "🔥 SONDERANGEBOT",

        promoTitle:
            "RIESIGER SMARTPHONE-VERKAUF",

        promoText:
            "Bis zu 70% RABATT auf ausgewählte Smartphones",

        phones:
            "Smartphones",

        choosePhone:
            "Wählen Sie aus unserer großen Auswahl an Smartphones.",

        allBrands:
            "Alle Marken",

        search:
            "Handys suchen...",

        recentDelivery:
            "🚚 Kürzlich geliefert",

        demoDelivery:
            "Beispielhafte Lieferaktivität",

        footerText:
            "Smartphone-Angebote einfach gemacht.",

        grabOffer:
            "Angebot sichern",

        popupText:
            "Sichern Sie sich dieses exklusive Angebot, bevor es weg ist!",

        yourCart:
            "Ihr Warenkorb",

        total:
            "Gesamt",

        checkout:
            "Zur Kasse",

        checkoutTitle:
            "Lieferung & Verifizierung",

        checkoutText:
            "Bitte geben Sie Ihre Daten ein, damit wir Ihre Bestellung bearbeiten können.",

        fullName:
            "Vollständiger Name",

        email:
            "E-Mail",

        phone:
            "Telefonnummer",

        country:
            "Land",

        city:
            "Stadt",

        address:
            "Adresse",

        postal:
            "Postleitzahl",

        notes:
            "Lieferhinweise",

        placeOrder:
            "Bestellung aufgeben",

        orderSuccess:
            "Bestellung übermittelt!",

        successText:
            "Ihre Bestellung wurde erfolgreich übermittelt. Wir kontaktieren Sie mit dem nächsten Schritt.",

        continueShopping:
            "Weiter einkaufen",

        inStock:
            "Auf Lager",

        almostSoldOut:
            "Fast ausverkauft",

        left:
            "übrig",

        addCart:
            "In den Warenkorb",

        phonesFound:
            "Smartphones"

    }

};


// =====================================================
// PHONE DATABASE
// =====================================================

let phones = [

    // =========================
    // APPLE
    // =========================

    {
        id: 1,
        brand: "Apple",
        name: "iPhone 18 Pro Max",
        price: 2499,
        discount: 80,
        image: "https://i.pinimg.com/736x/72/31/c6/7231c63b5ea9e115c3d52d849c7a0078.jpg"
    },
    {
        id: 2,
        brand: "Apple",
        name: "iPhone 17 Pro Max",
        price: 1799,
        discount: 70,
        image: "https://i.pinimg.com/736x/8e/f8/be/8ef8bee4bb6f355520f78899ab23cc83.jpg"
    },
    {
        id: 3,
        brand: "Apple",
        name: "iPhone 17 Pro",
        price: 1599,
        discount: 70,
        image: "https://i.pinimg.com/736x/ed/d1/87/edd187300402c6662c2728b10c1138fa.jpg"
    },
    {
        id: 4,
        brand: "Apple",
        name: "iPhone 17",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/1200x/72/cf/f5/72cff5f64d1ef3c215164e581a76d21e.jpg"
    },
    {
        id: 5,
        brand: "Apple",
        name: "iPhone 16 Pro Max",
        price: 1499,
        discount: 70,
        image: "https://i.pinimg.com/736x/fa/5e/99/fa5e998c8c2e69293cf580b6c33fc51f.jpg"
    },
    {
        id: 6,
        brand: "Apple",
        name: "iPhone 16 Pro",
        price: 1299,
        discount: 70,
        image: "https://i.pinimg.com/736x/ee/1b/af/ee1baf7f95f5db6823079ee8d17b3e47.jpg"
    },
    {
        id: 7,
        brand: "Apple",
        name: "iPhone 16 Plus",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/736x/2d/2d/43/2d2d4392696abfdf85a48d902cd7bee5.jpg"
    },
    {
        id: 8,
        brand: "Apple",
        name: "iPhone 16",
        price: 949,
        discount: 70,
        image: "https://i.pinimg.com/736x/9e/7c/ca/9e7ccaae7945dc89a84ebfdc74abcd7c.jpg"
    },
    {
        id: 9,
        brand: "Apple",
        name: "iPhone 15 Pro Max",
        price: 1199,
        discount: 70,
        image: "https://i.pinimg.com/736x/2f/2b/7f/2f2b7f7cf1d7c24484daa89f20167629.jpg"
    },
    {
        id: 10,
        brand: "Apple",
        name: "iPhone 15 Pro",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/736x/0e/cd/b7/0ecdb748b034492c5d7e1e6e2727d1aa.jpg"
    },
    {
        id: 11,
        brand: "Apple",
        name: "iPhone 15",
        price: 799,
        discount: 70,
        image: "https://i.pinimg.com/1200x/2c/72/b1/2c72b1c676062281b5b013da3f6f58f0.jpg"
    },
    {
        id: 12,
        brand: "Apple",
        name: "iPhone 14 Pro Max",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/736x/26/be/56/26be56634ad9773c9d8f6315cac2cba7.jpg"
    },
    {
        id: 13,
        brand: "Apple",
        name: "iPhone 14 Pro",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/1200x/bc/27/69/bc276910fe69462e927f242b4f7d6a84.jpg"
    },
    {
        id: 14,
        brand: "Apple",
        name: "iPhone 14",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/736x/27/74/90/277490e1ca0b10971f355cf890812877.jpg"
    },


    // =========================
    // SAMSUNG
    // =========================

    {
        id: 15,
        brand: "Samsung",
        name: "Galaxy S26 Ultra",
        price: 1399,
        discount: 70,
        image: "https://i.pinimg.com/736x/97/14/fb/9714fbfc0fe4761842a16bbf3622f88c.jpg"
    },
    {
        id: 16,
        brand: "Samsung",
        name: "Galaxy S26+",
        price: 1199,
        discount: 70,
        image: "https://i.pinimg.com/736x/db/f5/b6/dbf5b6367b5bee7812ee46b33f6c010b.jpg"
    },
    {
        id: 17,
        brand: "Samsung",
        name: "Galaxy S26",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/736x/fa/56/94/fa56946a7cfa007d073eda22e861b9e8.jpg"
    },
    {
        id: 18,
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        price: 1299,
        discount: 70,
        image: "https://i.pinimg.com/736x/d8/e6/9f/d8e69f9b36b7a2cf0a3add6d0d83498a.jpg"
    },
    {
        id: 19,
        brand: "Samsung",
        name: "Galaxy S25+",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/1200x/9a/73/c0/9a73c0258167027ab477a4affd5e7e3d.jpg"
    },
    {
        id: 20,
        brand: "Samsung",
        name: "Galaxy S25",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/736x/6b/97/c8/6b97c834ffb4c7c83bed188281300bc9.jpg"
    },
    {
    id: 21,
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    price: 1199,
    discount: 70,
    image: "https://i.pinimg.com/1200x/44/db/f3/44dbf3252affe1b050eef4b7ea01c988.jpg"
},
{
    id: 22,
    brand: "Samsung",
    name: "Galaxy S24+",
    price: 999,
    discount: 70,
    image: "https://i.pinimg.com/736x/68/7e/a2/687ea2a1169c2a4410843fda1abc1e06.jpg"
},
{
    id: 23,
    brand: "Samsung",
    name: "Galaxy S24",
    price: 799,
    discount: 70,
    image: "https://i.pinimg.com/736x/56/3f/18/563f18dd6d2d9e377bf6aded1223b78e.jpg"
},
{
    id: 24,
    brand: "Samsung",
    name: "Galaxy Z Fold 7",
    price: 1899,
    discount: 70,
    image: "https://i.pinimg.com/736x/8c/35/3e/8c353eb43e1108eadb18a25513defc73.jpg"
},
{
    id: 25,
    brand: "Samsung",
    name: "Galaxy Z Fold 6",
    price: 1799,
    discount: 70,
    image: "https://i.pinimg.com/1200x/95/6e/e9/956ee9e6e304976109a093b60c0c857b.jpg"
},
{
    id: 26,
    brand: "Samsung",
    name: "Galaxy Z Flip 7",
    price: 1099,
    discount: 70,
    image: "https://i.pinimg.com/736x/00/c7/77/00c777bdc47a27f72ae04b3560e38c7e.jpg"
},
{
    id: 27,
    brand: "Samsung",
    name: "Galaxy Z Flip 6",
    price: 999,
    discount: 70,
    image: "https://i.pinimg.com/1200x/ff/7b/28/ff7b282a66afd057d324fdd1c3e29160.jpg"
},
{
    id: 28,
    brand: "Google",
    name: "Pixel 10 Pro XL",
    price: 1199,
    discount: 70,
    image: "https://i.pinimg.com/736x/79/1d/35/791d3582b13a9e1d9b3d38e9fd80998b.jpg"
},
{
    id: 29,
    brand: "Google",
    name: "Pixel 10 Pro",
    price: 999,
    discount: 70,
    image: "https://i.pinimg.com/1200x/06/00/88/060088eccccc46d2331d6a8bcc7b0f43.jpg"
},
{
    id: 30,
    brand: "Google",
    name: "Pixel 10",
    price: 799,
    discount: 70,
    image: "https://i.pinimg.com/1200x/01/b1/2d/01b12dd073d3f7cc928402b8aab16ae7.jpg"
},
{
    id: 31,
    brand: "Google",
    name: "Pixel 9 Pro XL",
    price: 1099,
    discount: 70,
    image: "https://i.pinimg.com/736x/3d/62/fd/3d62fd7bbe60fd910186e416f51bd12f.jpg"
},
{
    id: 32,
    brand: "Google",
    name: "Pixel 9 Pro",
    price: 999,
    discount: 70,
    image: "https://i.pinimg.com/1200x/18/33/f0/1833f0ce99300ef42b0f4d8ed9664ce8.jpg"
},
{
    id: 33,
    brand: "Google",
    name: "Pixel 9",
    price: 799,
    discount: 70,
    image: "https://i.pinimg.com/736x/1d/27/9d/1d279dfef5070f0f6b2b03bd6e1da1ab.jpg"
},
{
    id: 34,
    brand: "Google",
    name: "Pixel 9a",
    price: 499,
    discount: 70,
    image: "https://i.pinimg.com/1200x/87/aa/01/87aa01ef0705d5b8ab9d0c9f9f440916.jpg"
},


// =========================
// XIAOMI
// =========================

{
    id: 35,
    brand: "Xiaomi",
    name: "Xiaomi 17 Ultra",
    price: 999,
    discount: 70,
    image: "https://i.pinimg.com/736x/2e/d5/bc/2ed5bc20950255ccca36446affe8882f.jpg"
},

{
    id: 36,
    brand: "Xiaomi",
    name: "Xiaomi 17 Pro",
    price: 899,
    discount: 70,
    image: "https://i.pinimg.com/736x/4c/dd/13/4cdd13c72776f99eb30b942bf8495aac.jpg"
},

{
    id: 37,
    brand: "Xiaomi",
    name: "Xiaomi 17",
    price: 799,
    discount: 70,
    image: "https://i.pinimg.com/736x/83/60/fc/8360fc9cdf71ca08cfa2d48122f3a9e3.jpg"
},

{
    id: 38,
    brand: "Xiaomi",
    name: "Xiaomi 15 Ultra",
    price: 999,
    discount: 70,
    image: "https://i.pinimg.com/1200x/76/a2/b4/76a2b4342f360c2bdb71c1a9e50255cb.jpg"
},

{
    id: 39,
    brand: "Xiaomi",
    name: "Xiaomi 15 Pro",
    price: 899,
    discount: 70,
    image: "https://i.pinimg.com/1200x/c7/a0/9d/c7a09d29e287f402fe64857db8a5f950.jpg"
},

{
    id: 40,
    brand: "Xiaomi",
    name: "Xiaomi 15",
    price: 699,
    discount: 70,
    image: "https://i.pinimg.com/1200x/e0/3e/21/e03e2176ea4072e594e20759bf9d1381.jpg"
},

{
    id: 41,
    brand: "Xiaomi",
    name: "Redmi Note 15 Pro+",
    price: 599,
    discount: 70,
    image: "https://i.pinimg.com/1200x/7e/0c/b1/7e0cb1f9db0dfced2ccefddfa3835d13.jpg"
},

{
    id: 42,
    brand: "Xiaomi",
    name: "Redmi Note 15 Pro",
    price: 499,
    discount: 70,
    image: "https://i.pinimg.com/736x/59/4a/1d/594a1d10d0b193714a22a8f63ef165f0.jpg"
},


// =========================
// ONEPLUS
// =========================

{
    id: 43,
    brand: "OnePlus",
    name: "OnePlus 14 Pro",
    price: 899,
    discount: 70,
    image: "YOUR_IMAGE_HERE"
},

{
    id: 44,
    brand: "OnePlus",
    name: "OnePlus 14",
    price: 699,
    discount: 70,
    image: "https://i.pinimg.com/736x/3c/2c/b0/3c2cb0edab652ca5b0550102b64ef9f5.jpg"
},

{
    id: 45,
    brand: "OnePlus",
    name: "OnePlus 13",
    price: 699,
    discount: 70,
    image: "https://i.pinimg.com/736x/cf/7c/3a/cf7c3a0aed4522be8f83d94898c011d4.jpg"
},

{
    id: 46,
    brand: "OnePlus",
    name: "OnePlus 13R",
    price: 599,
    discount: 70,
    image: "https://i.pinimg.com/736x/1d/cf/19/1dcf197ca11d26e07c64d759dcb9d614.jpg"
},

{
    id: 47,
    brand: "OnePlus",
    name: "OnePlus 12",
    price: 599,
    discount: 70,
    image: "https://i.pinimg.com/736x/b8/de/66/b8de66070ceb6e9f1ee7da31977de66f.jpg"
},

{
    id: 48,
    brand: "OnePlus",
    name: "OnePlus Open",
    price: 1699,
    discount: 70,
    image: "https://i.pinimg.com/1200x/c0/c9/d1/c0c9d133c542e5b684f517705a06ca4d.jpg"
},


// =========================
// SONY
// =========================

{
    id: 49,
    brand: "Sony",
    name: "Xperia 1 VII",
    price: 1199,
    discount: 70,
    image: "https://i.pinimg.com/1200x/97/a6/60/97a6600b8684198ba1ae8b3e6a56a7da.jpg"
},

{
    id: 50,
    brand: "Sony",
    name: "Xperia 1 VI",
    price: 1099,
    discount: 70,
    image: "https://i.pinimg.com/736x/d0/c6/d7/d0c6d75a28520f627fae7e5db3e96b63.jpg"
},

{
    id: 51,
    brand: "Sony",
    name: "Xperia 5 V",
    price: 899,
    discount: 70,
    image: "https://i.pinimg.com/1200x/07/d3/a4/07d3a453d89635cd3d9b9e28e72eeb46.jpg"
},

{
    id: 52,
    brand: "Sony",
    name: "Xperia 10 VII",
    price: 599,
    discount: 70,
    image: "https://i.pinimg.com/1200x/dc/2d/e7/dc2de721e9332b3b3fab710d0e718368.jpg"
},

{
    id: 53,
    brand: "Sony",
    name: "Xperia 10 VI",
    price: 499,
    discount: 70,
    image: "https://i.pinimg.com/1200x/e4/a6/0c/e4a60c3e9f74f74d50bd7db2de496fa3.jpg"
} ,

    // =========================
    // MOTOROLA
    // =========================

    {
        id: 54,
        brand: "Motorola",
        name: "Motorola Edge 60 Pro",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/1200x/2c/ad/ea/2cadeae3b4df59feff7779f2851a9126.jpg"
    },
    {
        id: 55,
        brand: "Motorola",
        name: "Motorola Edge 60",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/736x/b8/65/5d/b8655de36db9aaf2d2d5d7915f66fdca.jpg"
    },
    {
        id: 56,
        brand: "Motorola",
        name: "Motorola Razr 40 Ultra",
        price: 1299,
        discount: 70,
        image: "https://i.pinimg.com/736x/1d/77/28/bc1qydgq3f7tnz0vwsxv9dnq690ham0cy9g0wgxvy3.jpg"
    },
    {
        id: 57,
        brand: "Motorola",
        name: "Motorola Razr 60 Ultra",
        price: 1199,
        discount: 70,
        image: "https://i.pinimg.com/736x/9e/26/ab/9e26abb3ab85e3a1bb05bd7016cc4f38.jpg"
    },
    {
        id: 58,
        brand: "Motorola",
        name: "Motorola Moto G Power",
        price: 399,
        discount: 70,
        image: "https://i.pinimg.com/736x/34/16/8e/34168e1de437e1570876356f2be0f8f7.jpg"
    },


    // =========================
    // OPPO
    // =========================

    {
        id: 59,
        brand: "Oppo",
        name: "OPPO Find X8 Pro Mediatek Dimensity 9400 16GB RAM 512GB Storage 6.7 5G ColorOS Smartphone",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/1200x/0b/fe/fd/0bfefd9d6bbff57d0d57f9ba7654a2fe.jpg"
    },
    {
        id: 60,
        brand: "Oppo",
        name: "Oppo Find X8",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/736x/95/81/10/958110aa10c5d5cad09ea42cee479f80.jpg"
    },
    {
        id: 61,
        brand: "Oppo",
        name: "Oppo Find N5 16GB 512GB Cosmic Black (International Model) - Brand New",
        price: 1599,
        discount: 70,
        image: "https://i.pinimg.com/1200x/72/04/42/7204429419c4a4e95444afcb2135c342.jpg"
    },
    {
        id: 62,
        brand: "Oppo",
        name: "Oppo Reno 14 Pro",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/736x/94/09/ca/9409ca3b83a6fb8f9b320a5077a78965.jpg"
    },
    {
        id: 63,
        brand: "Oppo",
        name: "Oppo Reno 14",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/736x/bb/bb/a8/bbbba837249098ff73d59a1749fdd903.jpg"
    },


    // =========================
    // VIVO
    // =========================

    {
        id: 64,
        brand: "Vivo",
        name: "Vivo X200 Pro 512 GB, Titanium Grey, 6.78, Dual SIM, 5G",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/736x/67/9a/69/679a69f9cc00326b876f9b66fb4cac3a.jpg"
    },
    {
        id: 65,
        brand: "Vivo",
        name: "Vivo X200",
        price: 799,
        discount: 70,
        image: "https://i.pinimg.com/1200x/be/52/ca/be52ca36031dfe70524f68b76c22eb19.jpg"
    },
    {
        id: 66,
        brand: "Vivo",
        name: "Vivo X100 Pro 5G",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/736x/e5/83/bb/e583bbde2d4667bba815a01abd608a60.jpg"
    },
    {
        id: 67,
        brand: "Vivo",
        name: "Vivo V50 Pro",
        price: 599,
        discount: 70,
        image: "https://tse1.mm.bing.net/th/id/OIP.kiSVJEXgBm6oi87_42BF0wHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 68,
        brand: "Vivo",
        name: "Vivo V50",
        price: 499,
        discount: 70,
        image: "https://i.pinimg.com/1200x/8a/00/74/8a00743332cbea710b7e9dd0e12ea209.jpg"
    },


    // =========================
    // HUAWEI
    // =========================

    {
        id: 69,
        brand: "Huawei",
        name: "Huawei Pura 80 Ultra",
        price: 1299,
        discount: 70,
        image: "https://i.pinimg.com/736x/90/f8/0d/90f80d8fa44968f90e9150f834c5eef4.jpg"
    },
    {
        id: 70,
        brand: "Huawei",
        name: "Huawei Pura 80 Pro",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/1200x/21/8e/12/218e1227498b5280e4174d30dcafc8c1.jpg"
    },
    {
        id: 71,
        brand: "Huawei",
        name: "Huawei Mate 70 Pro",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/236x/f6/df/0d/f6df0d19e7965ccb0855511f0aee5ecf.jpg"
    },
    {
        id: 72,
        brand: "Huawei",
        name: "Huawei Mate 70",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/736x/d8/ff/3b/d8ff3bb10e0d9283e2c00f04d51f963a.jpg"
    },
    {
        id: 73,
        brand: "Huawei",
        name: "Huawei Nova 13 Pro",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/736x/54/99/ee/5499ee337e85c337b055c4d7431688c1.jpg"
    },


    // =========================
    // NOTHING
    // =========================

    {
        id: 74,
        brand: "Nothing",
        name: "Nothing Phone 3",
        price: 799,
        discount: 70,
        image: "https://i.pinimg.com/1200x/64/03/4c/64034c7fd6fd3abc9df2e4e0950e693e.jpg"
    },
    {
        id: 75,
        brand: "Nothing",
        name: "Nothing Phone 3a Pro",
        price: 499,
        discount: 70,
        image: "https://i.pinimg.com/736x/51/41/4c/51414c1a4cdf5d5797cde6133b04d20b.jpg"
    },
    {
        id: 76,
        brand: "Nothing",
        name: "Nothing Phone 3a",
        price: 399,
        discount: 70,
        image: "https://i.pinimg.com/736x/a8/50/01/a85001339c84729a410fc64e0013def1.jpg"
    },


    // =========================
    // HONOR
    // =========================

    {
        id: 77,
        brand: "Honor",
        name: "Honor Magic7 Pro",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/1200x/b7/05/a1/b705a1bf9629225888b5344fd3fedd7d.jpg"
    },
    {
        id: 78,
        brand: "Honor",
        name: "Honor Magic7",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/736x/77/bc/69/77bc69a0384d3f74a83b3c57a399eb2e.jpg"
    },
    {
        id: 79,
        brand: "Honor",
        name: "Honor Magic V3",
        price: 1699,
        discount: 70,
        image: "https://i.pinimg.com/736x/58/e1/03/58e10364efb16b70b533c0a44ca347e7.jpg"
    },
    {
        id: 80,
        brand: "Honor",
        name: "Honor 400 Pro",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/1200x/b3/a6/7b/b3a67b090c1a20b488e7d4f877852838.jpg"
    },


    // =========================
    // ASUS
    // =========================

    {
        id: 81,
        brand: "Asus",
        name: "Asus ROG Phone 9 Pro",
        price: 1199,
        discount: 70,
        image: "https://i.pinimg.com/736x/59/5f/b0/595fb0032ef95f3af91f334e4104ff17.jpg"
    },
    {
        id: 82,
        brand: "Asus",
        name: "Asus ROG Phone 9",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/736x/7d/e6/60/7de66091d7361f57f1c3ffaa5040743f.jpg"
    },
    {
        id: 83,
        brand: "Asus",
        name: "Asus Zenfone 12 Ultra",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/1200x/c7/f9/52/c7f9522901820b0bdc7955f5ecc60911.jpg"
    },


    // =========================
    // REALME
    // =========================

    {
        id: 84,
        brand: "Realme",
        name: "Realme GT 7 Pro",
        price: 799,
        discount: 70,
        image: "https://i.pinimg.com/736x/1a/c4/a2/1ac4a252e13cd239d0484b9ed969d3b1.jpg"
    },
    {
        id: 85,
        brand: "Realme",
        name: "Realme GT 7",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/1200x/96/53/ee/9653ee553234ec68830d12b05b3a0687.jpg"
    },
    {
        id: 86,
        brand: "Realme",
        name: "Realme GT 6",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/1200x/49/a0/28/49a028c4d7a0b427a73d353c63e6b140.jpg"
    },


    // =========================
    // ZTE
    // =========================

    {
        id: 87,
        brand: "ZTE",
        name: "ZTE Nubia Z70 Ultra",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/1200x/30/cf/75/30cf75d96ac31b06bfda24fcad44c6a2.jpg"
    },
    {
        id: 88,
        brand: "ZTE",
        name: "ZTE Nubia Z60 Ultra",
        price: 799,
        discount: 70,
        image: "https://i.pinimg.com/1200x/04/0c/37/040c378eb0f2d11bcd19622e9022a095.jpg"
    },
    {
        id: 89,
        brand: "ZTE",
        name: "ZTE Nubia Flip 5G, Dual, 256GB 8GB RAM, Cosmic Black",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/1200x/84/a4/75/84a475e8a4671af1fac98042974bf4f9.jpg"
    },


    // =========================
    // TCL
    // =========================

    {
        id: 90,
        brand: "TCL",
        name: "TCL 60 Pro",
        price: 499,
        discount: 70,
        image: "YOUR_IMAGE_HERE"
    },
    {
        id: 91,
        brand: "TCL",
        name: "TCL 60",
        price: 399,
        discount: 70,
        image: "https://i.pinimg.com/1200x/0d/8c/fb/0d8cfbfc56183a6fcc3af6eebdd4413b.jpg"
    },


    // =========================
    // NOKIA
    // =========================

    {
        id: 92,
        brand: "Nokia",
        name: "Nokia X50",
        price: 499,
        discount: 70,
        image: "https://tse1.mm.bing.net/th/id/OIP.FQispcQsgdge5ZHDiWDIKAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 93,
        brand: "Nokia",
        name: "Nokia G50",
        price: 399,
        discount: 70,
        image: "https://i.pinimg.com/1200x/41/a0/ae/41a0aed36072e34a6440cc772ab1810a.jpg"
    },


    // =========================
    // MICROSOFT
    // =========================

    {
        id: 94,
        brand: "Microsoft",
        name: "Surface Duo 3",
        price: 1399,
        discount: 70,
        image: "https://i.pinimg.com/736x/66/f3/c4/66f3c4dc8eee6599fd579223f0073d62.jpg"
    },


    // =========================
    // FAIRPHONE
    // =========================

    {
        id: 95,
        brand: "Fairphone",
        name: "Fairphone 6",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/1200x/93/fd/18/93fd18c9242b6e18a71175ce1ee8ece3.jpg"
    },
    {
        id: 96,
        brand: "Fairphone",
        name: "Fairphone 5",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/1200x/a6/aa/dd/a6aadd1ead52ea2004de0ba7d3fdea75.jpg"
    },


    // =========================
    // TECNO
    // =========================

    {
        id: 97,
        brand: "Tecno",
        name: "Tecno Phantom V Fold2",
        price: 1099,
        discount: 70,
        image: "https://i.pinimg.com/736x/e6/f0/f6/e6f0f6a074c6db8228b9734525868fb1.jpg"
    },
    {
        id: 98,
        brand: "Tecno",
        name: "Tecno Phantom V Flip2",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/1200x/49/9a/e2/499ae21725aac0090589f3166d48dcff.jpg"
    },
    {
        id: 99,
        brand: "Tecno",
        name: "Tecno Camon 40 Pro",
        price: 339,
        discount: 70,
        image: "https://i.pinimg.com/736x/40/f1/dd/40f1dd5dbf5a68d766f6ec13f569f955.jpg"
    },


    // =========================
    // INFINIX
    // =========================

    {
        id: 100,
        brand: "Infinix",
        name: "Infinix Note 50 Pro+",
        price: 499,
        discount: 70,
        image: "https://i.pinimg.com/736x/3c/36/a3/3c36a3d8e2455ba209927c9d51336992.jpg"
    },
    {
        id: 101,
        brand: "Infinix",
        name: "Infinix Note 50 Pro",
        price: 399,
        discount: 70,
        image: "https://i.pinimg.com/736x/d0/06/0b/d0060b07d48009026a54082d3bb471de.jpg"
    },
    {
        id: 102,
        brand: "Infinix",
        name: "Infinix GT 30 Pro",
        price: 449,
        discount: 70,
        image: "https://i.pinimg.com/736x/8a/d1/c6/8ad1c62689afec41387c012a76386417.jpg"
    },


    // =========================
    // LAVA
    // =========================

    {
        id: 103,
        brand: "Lava",
        name: "Lava Agni 3",
        price: 399,
        discount: 70,
        image: "https://i.pinimg.com/1200x/ec/6d/40/ec6d40d7ace456603d0f2d842544c565.jpg"
    },


    // =========================
    // SHARP
    // =========================

    {
        id: 104,
        brand: "Sharp",
        name: "Sharp Aquos R10",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/736x/5c/86/76/5c86766a955661cd14cf2fa4a343cd2d.jpg"
    },
    {
        id: 105,
        brand: "Sharp",
        name: "Sharp Aquos Sense9",
        price: 499,
        discount: 70,
        image: "https://i.pinimg.com/736x/a6/b9/aa/a6b9aa7651660b188484b25ecfedcca8.jpg"
    },


    // =========================
    // LEICA
    // =========================

    {
        id: 106,
        brand: "Leica",
        name: "Leitz Phone 3",
        price: 1699,
        discount: 70,
        image: "https://i.pinimg.com/236x/50/28/db/5028db4fe706cef9a16c65ba0c5f67d4.jpg"
    },


    // =========================
    // REDMAGIC
    // =========================

    {
        id: 107,
        brand: "RedMagic",
        name: "RedMagic 10 Pro",
        price: 899,
        discount: 70,
        image: "https://i.pinimg.com/1200x/31/d9/1d/31d91d3874eb08fd50b1709cec77189d.jpg"
    },
    {
        id: 108,
        brand: "RedMagic",
        name: "RedMagic 10S Pro",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/736x/00/e2/ee/00e2ee2bd3411df8844c55ace69cd276.jpg"
    },


    // =========================
    // POCO
    // =========================

    {
        id: 109,
        brand: "Poco",
        name: "Poco F7 Pro",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/1200x/b1/0c/d1/b10cd1ceb8de2d004e1f6ea7f69f8efd.jpg"
    },
    {
        id: 110,
        brand: "Poco",
        name: "Poco F7 Ultra",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/736x/59/85/0f/59850f8a00e1a63a99f461bade7c4434.jpg"
    },


    // =========================
    // IQOO
    // =========================

    {
        id: 111,
        brand: "iQOO",
        name: "iQOO 13",
        price: 699,
        discount: 70,
        image: "https://i.pinimg.com/736x/c1/5e/36/c15e36f7e3a805d853dae4521f1c3951.jpg"
    },
    {
        id: 112,
        brand: "iQOO",
        name: "iQOO Neo 10 Pro",
        price: 599,
        discount: 70,
        image: "https://tse1.mm.bing.net/th/id/OIP.GwoSXDc2NwdQJC05PJXN1QHaIk?r=0&w=1106&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3"
    },


    // =========================
    // MEIZU
    // =========================

    {
        id: 113,
        brand: "Meizu",
        name: "Meizu 22",
        price: 599,
        discount: 70,
        image: "https://i.pinimg.com/1200x/83/8e/09/838e09fe56e75ba0bf74b02ae23a7fa9.jpg"
    },


    // =========================
    // HTC
    // =========================

    {
        id: 114,
        brand: "HTC",
        name: "HTC U24 Pro",
        price: 332,
        discount: 70,
        image: "https://i.pinimg.com/736x/7e/3d/1a/7e3d1a198b411803280e1dc8c02fb2f6.jpg"
    },


    // =========================
    // SONY EXTRA
    // =========================

    {
        id: 115,
        brand: "Sony",
        name: "Xperia 1 V",
        price: 999,
        discount: 70,
        image: "https://i.pinimg.com/1200x/1a/69/a5/bc1qydgq3f7tnz0vwsxv9dnq690ham0cy9g0wgxvy3.jpg"
    },


    // =========================
    // SAMSUNG EXTRA
    // =========================

    {
        id: 116,
        brand: "Samsung",
        name: "Galaxy A56",
        price: 369,
        discount: 70,
        image: "https://i.pinimg.com/736x/2e/52/5b/2e525bb7e65a18c1f80a150df93c5a64.jpg"
    },
    {
        id: 117,
        brand: "Samsung",
        name: "Galaxy A36",
        price: 346,
        discount: 70,
        image: "https://i.pinimg.com/1200x/cd/fc/b7/cdfcb705b5f56d6da8944cb18ca79a7c.jpg"
    },


    // =========================
    // APPLE EXTRA
    // =========================

    {
        id: 118,
        brand: "Apple",
        name: "iPhone 13 Pro Max",
        price: 556,
        discount: 70,
        image: "https://i.pinimg.com/1200x/48/50/67/485067d9570ba3f9a3cfd9c80dd38924.jpg"
    },
    {
        id: 119,
        brand: "Apple",
        name: "iPhone 13 Pro",
        price: 482,
        discount: 70,
        image: "https://i.pinimg.com/736x/76/96/d7/7696d733a96c7b2cfe1b2128a0b1bb75.jpg"
    },
    {
        id: 120,
        brand: "Apple",
        name: "iPhone 13",
        price: 369,
        discount: 70,
        image: "https://i.pinimg.com/736x/6b/36/c1/6b36c1dbf64607491d0d24c5aa3349ad.jpg"
    }

];




// =====================================================
// STOCK
// =====================================================

function generateStock() {

    /*
        Stock will always be between
        101 and 500.
    */

    return Math.floor(Math.random() * 400) + 101;
}


phones.forEach(function(phone) {

    phone.stock = generateStock();

});


// =====================================================
// CART
// =====================================================

let cart = [];


// =====================================================
// ELEMENTS
// =====================================================


let wishlistBtn =
    document.getElementById("wishlistBtn");

let wishlistOverlay =
    document.getElementById("wishlistOverlay");

let closeWishlist =
    document.getElementById("closeWishlist");

let wishlistItems =
    document.getElementById("wishlistItems");

let accountBtn =
    document.getElementById("accountBtn");

let accountOverlay =
    document.getElementById("accountOverlay");

let closeAccount =
    document.getElementById("closeAccount");

let showRegister =
    document.getElementById("showRegister");

let registerOverlay =
    document.getElementById("registerOverlay");

let closeRegister =
    document.getElementById("closeRegister");

let backToLogin =
    document.getElementById("backToLogin");

    let accountMenu =
    document.getElementById("accountMenu");

let accountMenuName =
    document.getElementById("accountMenuName");

let logoutBtn =
    document.getElementById("logoutBtn");

let pageLoadingOverlay =
    document.getElementById(
        "pageLoadingOverlay"
    );

let myAccountBtn =
    document.getElementById("myAccountBtn");
    let myOrdersBtn =
    document.getElementById("myOrdersBtn");

let myOrdersOverlay =
    document.getElementById("myOrdersOverlay");

let closeMyOrders =
    document.getElementById("closeMyOrders");

let ordersList =
    document.getElementById("ordersList");


function getCustomerOrderAccessKey(email) {

    let storageKey = "gadgetRushOrderAccess_" + email.toLowerCase();
    let accessKey = localStorage.getItem(storageKey);

    if (!accessKey) {
        let randomBytes = new Uint8Array(32);
        window.crypto.getRandomValues(randomBytes);
        accessKey = Array.from(randomBytes).map(function(byte) {
            return byte.toString(16).padStart(2, "0");
        }).join("");
        localStorage.setItem(storageKey, accessKey);
    }

    return accessKey;

}

let myAccountOverlay =
    document.getElementById("myAccountOverlay");

let closeMyAccount =
    document.getElementById("closeMyAccount");

let profileName =
    document.getElementById("profileName");

let profileEmail =
    document.getElementById("profileEmail");

let productsContainer =
    document.getElementById("productsContainer");

let searchInput =
    document.getElementById("searchInput");

let brandFilter =
    document.getElementById("brandFilter");

let sortSelect =
    document.getElementById("sortSelect");

let cartButton =
    document.getElementById("cartButton");

let cartOverlay =
    document.getElementById("cartOverlay");

let cartItems =
    document.getElementById("cartItems");

let cartTotal =
    document.getElementById("cartTotal");

let cartCount =
    document.getElementById("cartCount");

let checkoutOverlay =
    document.getElementById("checkoutOverlay");

let checkoutSummary =
    document.getElementById("checkoutSummary");

let checkoutForm =
    document.getElementById("checkoutForm");

    let registerForm =
    document.getElementById("registerForm");

let loginForm =
    document.getElementById("loginForm");

let orderLoadingOverlay =
    document.getElementById("orderLoadingOverlay");

//=====================================================
//LOGIN AND REGISTER
//=====================================================
accountBtn.addEventListener(
    "click",
    function() {

        let loggedIn =
            localStorage.getItem(
                "gadgetRushLoggedIn"
            );

        if (loggedIn === "true") {

            accountMenu.style.display =
                accountMenu.style.display === "block"
                    ? "none"
                    : "block";

        } else {

            accountOverlay.style.display =
                "flex";

        }

    }
);

logoutBtn.addEventListener(
    "click",
    function() {

        localStorage.removeItem(
            "gadgetRushLoggedIn"
        );

        localStorage.removeItem(
            "gadgetRushCurrentUser"
        );

        currentUser = null;

        accountMenu.style.display =
            "none";

        accountBtn.textContent =
            "👤 Account";

       showNotification(
    "You have been logged out."
);

    }
);

closeAccount.addEventListener(
    "click",
    function() {

        accountOverlay.style.display = "none";

    }
);

showRegister.addEventListener(
    "click",
    function() {

        accountOverlay.style.display = "none";

        registerOverlay.style.display = "flex";

    }
);

closeRegister.addEventListener(
    "click",
    function() {

        registerOverlay.style.display = "none";

    }
);

backToLogin.addEventListener(
    "click",
    function() {

        registerOverlay.style.display = "none";

        accountOverlay.style.display = "flex";

    }
);

registerForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name =
            document.getElementById("registerName").value;

        let email =
            document.getElementById("registerEmail").value;

        let password =
            document.getElementById("registerPassword").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            ashowNotification(
        "passwords do not match.",
        "error"
    );

            return;

        }


        let user = {

            name: name,
            email: email,
            password: password

        };


        let users =
    JSON.parse(
        localStorage.getItem("gadgetRushUsers")
    ) || [];

users.push(user);

localStorage.setItem(
    "gadgetRushUsers",
    JSON.stringify(users)
);

        showNotification(
    "Account created successfully!"
);


        registerForm.reset();

        registerOverlay.style.display =
            "none";

        accountOverlay.style.display =
            "flex";

    }
);

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let email =
            document.getElementById("loginEmail").value;

        let password =
            document.getElementById("loginPassword").value;


 let savedUsers =
    localStorage.getItem(
        "gadgetRushUsers"
    );


if (!savedUsers) {

    showNotification(
        "No account found. Please create an account first.",
        "warning"
    );

    return;

}


let users =
    JSON.parse(savedUsers);


let user =
    users.find(function(user) {

        return (
            email === user.email &&
            password === user.password
        );

    });


if (!user) {

    showNotification(
        "Incorrect email or password.",
        "error"
    );

    return;

}

localStorage.setItem(
    "gadgetRushLoggedIn",
    "true"
);

localStorage.setItem(
    "gadgetRushCurrentUser",
    JSON.stringify(user)
);

currentUser = user;

showNotification(
    "Welcome back, " +
    user.name +
    "!"
);

loginForm.reset();

accountOverlay.style.display =
    "none";

updateAccountButton();
checkApprovedOrders();




    }
);

function updateAccountButton() {

    let loggedIn =
        localStorage.getItem(
            "gadgetRushLoggedIn"
        );

    if (loggedIn === "true") {

        let savedUser =
            localStorage.getItem(
                "gadgetRushCurrentUser"
            );

        if (savedUser) {

            let user =
                JSON.parse(savedUser);

            accountBtn.textContent =
                "👤 " + user.name;

            accountMenuName.textContent =
                "👤 " + user.name;

        }

    } else {

        accountBtn.textContent =
            "👤 Account";

        accountMenuName.textContent =
            "👤 Account";

    }

}

myAccountBtn.addEventListener(
    "click",
    function() {

        let savedUser =
            localStorage.getItem(
                "gadgetRushCurrentUser"
            );

        if (!savedUser) {

            return;

        }

        let user =
            JSON.parse(savedUser);

        profileName.textContent =
            user.name;

        profileEmail.textContent =
            user.email;

        accountMenu.style.display =
            "none";

        myAccountOverlay.style.display =
            "flex";

    }
);

closeMyAccount.addEventListener(
    "click",
    function() {

        myAccountOverlay.style.display =
            "none";

    }
);

myOrdersBtn.addEventListener(
    "click",
    function() {

        accountMenu.style.display =
            "none";

        myOrdersOverlay.style.display =
            "flex";

        displayOrders();

    }
);
closeMyOrders.addEventListener(
    "click",
    function() {

        myOrdersOverlay.style.display =
            "none";

    }
);
async function displayOrders() {

    if (!currentUser) {
        ordersList.innerHTML = '<p class="no-orders">Log in to view your orders.</p>';
        return;
    }

    ordersList.innerHTML = '<p class="no-orders">Loading orders...</p>';

    try {
        let response = await fetch(
    (window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : window.location.origin) +
    "/orders?email=" +
    encodeURIComponent(currentUser.email),
            {
                headers: {
                    "x-customer-order-key": getCustomerOrderAccessKey(currentUser.email)
                }
            }
        );
        let savedOrders = await response.json();

        if (!response.ok) {
            throw new Error(savedOrders.message || "Could not load orders.");
        }

        if (savedOrders.length === 0) {
            ordersList.innerHTML = '<p class="no-orders">You have no orders yet.</p>';
            return;
        }

        ordersList.innerHTML = "";
        savedOrders.forEach(function(order) {
            let orderCard = document.createElement("div");
            orderCard.classList.add("order-card");

            let itemsHTML = (order.items || []).map(function(item) {
                return `
                    <div class="order-item">
                        <div class="order-product-info">
                            <img src="${escapeHTML(item.image || "")}" alt="${escapeHTML(item.name || "Product")}" class="order-product-image">
                            <span>${escapeHTML(item.name || "Product")} × ${Number(item.quantity) || 1}</span>
                        </div>
                        <span>${formatPrice(Number(item.price) * Number(item.quantity))}</span>
                    </div>
                `;
            }).join("");
            let total = order.amountNgn
                ? "₦" + Number(order.amountNgn).toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
                : typeof order.total === "number"
                    ? formatPrice(order.total)
                    : escapeHTML(order.total || "");

            orderCard.innerHTML = `
                <h3>Order</h3>
                <div class="order-number">${escapeHTML(order.orderNumber)}</div>
                <div class="order-status">Status: <strong>${escapeHTML(order.status || "Pending")}</strong></div>
                <div class="order-items">${itemsHTML}</div>
                <div class="order-total"><span>Total</span><span>${total}</span></div>
                ${order.status === "Awaiting payment"
                    ? '<button class="view-transfer-details" type="button">View transfer details</button>'
                    : order.status === "Pending approval"
                        ? '<p>Payment marked as sent. Waiting for admin approval.</p>'
                        : ""}
            `;

            let viewTransferButton = orderCard.querySelector(".view-transfer-details");
            if (viewTransferButton) {
                viewTransferButton.addEventListener("click", function() {
                    displayTransferOrder(order);
                });
            }
            ordersList.appendChild(orderCard);
        });
    } catch (error) {
        ordersList.innerHTML = '<p class="no-orders">Could not load orders. Please try again.</p>';
        console.error("CUSTOMER ORDERS ERROR:", error);
    }

}


async function checkApprovedOrders() {

    if (!currentUser || !currentUser.email) {
        return;
    }

    try {
        let response = await fetch(
    (window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : window.location.origin) +
    "/orders?email=" +
    encodeURIComponent(currentUser.email),
            {
                headers: {
                    "x-customer-order-key": getCustomerOrderAccessKey(currentUser.email)
                }
            }
        );
        if (!response.ok) {
            return;
        }

        let orders = await response.json();
        let seenKey = "gadgetRushApprovalNotices_" + currentUser.email.toLowerCase();
        let seenOrderNumbers = JSON.parse(localStorage.getItem(seenKey) || "[]");
        let approvedOrder = orders.find(function(order) {
            return order.status === "Approved" &&
                !seenOrderNumbers.includes(order.orderNumber);
        });
        if (approvedOrder) {
            seenOrderNumbers.push(approvedOrder.orderNumber);
            localStorage.setItem(seenKey, JSON.stringify(seenOrderNumbers));
            showOrderStatusPopup(
                "Payment approved",
                "Your payment for order " + approvedOrder.orderNumber + " has been approved."
            );
        }
    } catch (error) {
        console.warn("Could not check approved orders:", error);
    }

}


function showOrderStatusPopup(title, message) {

    document.getElementById("successTitle").textContent = title;
    document.getElementById("successMessage").textContent = message;
    document.getElementById("successOverlay").style.display = "flex";

}

wishlistBtn.addEventListener(
    "click",
    function() {

        accountMenu.style.display =
            "none";

        displayWishlist();

        wishlistOverlay.style.display =
            "flex";

    }
);

closeWishlist.addEventListener(
    "click",
    function() {

        wishlistOverlay.style.display =
            "none";

    }
);

function displayWishlist() {

    let wishlist =
        JSON.parse(
           localStorage.getItem(
    "gadgetRushWishlist_" +
    currentUser.email
)
        ) || [];


    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

            <p class="no-wishlist">

                Your wishlist is empty.

            </p>

        `;

        return;

    }


    wishlistItems.innerHTML = "";


    wishlist.forEach(function(phone) {

        let salePrice =
            calculateSalePrice(
                phone.price,
                phone.discount
            );


        let wishlistItem =
            document.createElement("div");

        wishlistItem.classList.add(
            "wishlist-item"
        );


        wishlistItem.innerHTML = `

            <img
                src="${escapeHTML(phone.image)}"
                alt="${escapeHTML(phone.name)}"
                style="
                    width:80px;
                    height:80px;
                    object-fit:contain;
                    float:left;
                    margin-right:15px;
                "
            >

            <strong>
                ${escapeHTML(phone.name)}
            </strong>

            <p class="brand">
                ${escapeHTML(phone.brand)}
            </p>

            <div>

                <span class="old-price">
                    ${formatPrice(phone.price)}
                </span>

                <span class="sale-price">
                    ${formatPrice(salePrice)}
                </span>

            </div>

            <div style="clear:both;"></div>

            <button
                class="add-cart"
                onclick="addToCart(${phone.id})">

                ${translations[currentLanguage].addCart}

            </button>

            <button
                class="remove-wishlist"
                onclick="removeFromWishlist(${phone.id})">

                Remove

            </button>

        `;


        wishlistItems.appendChild(
            wishlistItem
        );

    });

}

function removeFromWishlist(phoneId) {

   let wishlist =
    JSON.parse(
        localStorage.getItem(
            "gadgetRushWishlist_" +
            currentUser.email
        )
    ) || [];


    wishlist =
        wishlist.filter(function(phone) {

            return phone.id !== phoneId;

        });


    localStorage.setItem(
    "gadgetRushWishlist_" +
    currentUser.email,
    JSON.stringify(wishlist)
);


    displayWishlist();

}

function addToWishlist(phoneId) {

    let phone =
        phones.find(function(item) {

            return item.id === phoneId;

        });


    if (!phone) {

        return;

    }


    let wishlist =
    JSON.parse(
        localStorage.getItem(
            "gadgetRushWishlist_" +
            currentUser.email
        )
    ) || [];


    let alreadySaved =
        wishlist.find(function(item) {

            return item.id === phoneId;

        });


    if (alreadySaved) {

       showNotification(
    "This phone is already in your wishlist.", "info"
);
        return;

    }


    wishlist.push(phone);


   localStorage.setItem(
    "gadgetRushWishlist_" +
    currentUser.email,
    JSON.stringify(wishlist)
);


    showNotification(
    phone.name +
    " added to your wishlist ❤️", "success"
);

}

function showNotification(
    message,
    type = "success"
) {

    let notification =
        document.getElementById(
            "siteNotification"
        );

    let notificationMessage =
        document.getElementById(
            "notificationMessage"
        );

    let notificationIcon =
        document.getElementById(
            "notificationIcon"
        );


    notificationMessage.textContent =
        message;


    notification.classList.remove(
        "success",
        "error",
        "warning",
        "info"
    );


    notification.classList.add(
        type
    );


    if (type === "success") {

        notificationIcon.textContent =
            "✓";

    }

    else if (type === "error") {

        notificationIcon.textContent =
            "✕";

    }

    else if (type === "warning") {

        notificationIcon.textContent =
            "⚠";

    }

    else if (type === "info") {

        notificationIcon.textContent =
            "ℹ";

    }


    notification.classList.add(
        "show"
    );


    setTimeout(function() {

        notification.classList.remove(
            "show"
        );

    }, 3000);

}

// =====================================================
// CALCULATE SALE PRICE
// =====================================================

function formatPrice(price) {

    if (currentCurrency === "NGN") {
        return "₦" + (price * 1500).toLocaleString(
            "en-NG",
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        );
    }

    if (currentCurrency === "EUR") {
        return "€" + (price * exchangeRate).toFixed(2);
    }

    return "$" + price.toFixed(2);
}

function calculateSalePrice(price, discount) {

    let discountAmount =
        price * discount / 100;

    return price - discountAmount;
}


function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function(character) {
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }[character];
    });
}


// =====================================================
// STOCK STATUS
// =====================================================

function getStockStatus(stock) {

    if (stock <= 120) {

        return translations[currentLanguage].almostSoldOut;

    }

    return translations[currentLanguage].inStock;
}


async function loadManagedProductValues() {

    phones.forEach(function(phone) {
        phone.stock = 0;
    });

    try {
       let response = await fetch(
    (window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : window.location.origin) +
    "/products"
);
        if (!response.ok) {
            return;
        }

        let managedProducts = await response.json();
        managedProducts.forEach(function(product) {
            let phone = phones.find(function(item) {
                return item.id === product.id;
            });

            if (phone) {
                phone.name = product.name || phone.name;
                phone.brand = product.brand || phone.brand;
                phone.price = Number(product.price);
                phone.discount = Number(product.discount);
                phone.stock = Number(product.stock) || 0;
                phone.image = product.image || phone.image;
            } else {
                phones.push({
                    id: Number(product.id),
                    name: product.name,
                    brand: product.brand,
                    price: Number(product.price),
                    discount: Number(product.discount),
                    stock: Number(product.stock) || 0,
                    image: product.image
                });
            }
        });

        createBrandFilter();
        filterPhones();
    } catch (error) {
        console.warn("Could not load managed product values:", error);
    }

}


// =====================================================
// DISPLAY PHONES
// =====================================================

function displayPhones(phoneList) {

    productsContainer.innerHTML = "";

    document.getElementById("productCount").textContent =
        phoneList.length +
        " " +
        translations[currentLanguage].phonesFound;


    phoneList.forEach(function(phone) {

        let salePrice =
            calculateSalePrice(
                phone.price,
                phone.discount
            );


        let stockStatus =
            getStockStatus(phone.stock);


        let stockClass =
            phone.stock <= 120
                ? "low"
                : "in";


       let card =
    document.createElement("div");


card.classList.add("product-card");


// Open product details when the card is clicked
card.addEventListener("click", function() {

    openProductDetails(phone.id);

});


        card.innerHTML = `

            <img
                class="product-image"
                src="${phone.image}"
                alt="${escapeHTML(phone.name)}"
            >


            <div class="product-info">

                <span class="discount">
                    ${phone.discount}% OFF
                </span>


                <h3>
                    ${escapeHTML(phone.name)}
                </h3>


                <p class="brand">
                    ${escapeHTML(phone.brand)}
                </p>


                <div>

                    <span class="old-price">
                         ${formatPrice(phone.price)}
                    </span>

                    <span class="sale-price">
                         ${formatPrice(salePrice)}
                    </span>

                </div>


                <div class="stock ${stockClass}">

                    ${stockStatus}

                    ·

                    ${phone.stock}

                    ${translations[currentLanguage].left}

                </div>


               <button class="add-cart" onclick="event.stopPropagation(); addToCart(${phone.id})">

    ${translations[currentLanguage].addCart}

</button>

<button
    class="wishlist-button"
    onclick="event.stopPropagation(); addToWishlist(${phone.id})">

    ❤️ Wishlist

</button>

            </div>

        `;


        productsContainer.appendChild(card);

    });

}


// =====================================================
// PRODUCT DETAILS
// =====================================================

let productDetailsOverlay =
    document.getElementById("productDetailsOverlay");


let productDetailsContent =
    document.getElementById("productDetailsContent");


let phoneDetails = {

    // =========================
    // APPLE
    // =========================

    1: {
        description: "A premium flagship demonstration phone built for high-end photography, gaming, entertainment and everyday performance.",
        camera: "Advanced Pro multi-camera system",
        battery: "Large all-day battery — DEMO",
        display: "Large Super Retina XDR display",
        processor: "Next-generation Apple chip — DEMO",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    2: {
        description: "A powerful flagship iPhone designed for smooth performance, photography, gaming and premium everyday use.",
        camera: "Pro multi-camera system",
        battery: "All-day battery",
        display: "Large Super Retina XDR display",
        processor: "Apple A-series Pro chip",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    3: {
        description: "A premium iPhone offering a balance of flagship performance, excellent cameras and a large immersive display.",
        camera: "Advanced dual/pro camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    4: {
        description: "A high-performance iPhone focused on photography, gaming, video recording and smooth everyday use.",
        camera: "Advanced Pro camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series Pro chip",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    5: {
        description: "A premium iPhone with strong performance, an excellent camera system and a bright OLED display.",
        camera: "Pro-grade multi-camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series Pro chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    6: {
        description: "A powerful iPhone designed for users who want excellent photography, gaming performance and a premium display.",
        camera: "Advanced dual camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    7: {
        description: "A compact premium iPhone combining strong performance, high-quality photography and a bright OLED display.",
        camera: "Dual camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    8: {
        description: "A modern iPhone with excellent performance, a high-quality camera system and a vibrant OLED display.",
        camera: "48MP-class main camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    9: {
        description: "A premium iPhone built for everyday performance, photography, video and entertainment.",
        camera: "Advanced dual camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    10: {
        description: "A stylish iPhone offering smooth performance, excellent photography and a premium OLED viewing experience.",
        camera: "Dual rear camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    11: {
        description: "A capable iPhone designed for photography, social media, streaming and everyday tasks.",
        camera: "Dual camera system",
        battery: "All-day battery",
        display: "Super Retina OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    12: {
        description: "A compact and powerful iPhone with excellent image quality and smooth everyday performance.",
        camera: "Dual camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    13: {
        description: "A premium previous-generation iPhone offering strong performance, excellent cameras and OLED display quality.",
        camera: "Dual camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    14: {
        description: "A popular iPhone offering reliable performance, high-quality photography and a bright OLED display.",
        camera: "Dual 12MP camera system",
        battery: "All-day battery",
        display: "6.1-inch Super Retina XDR OLED",
        processor: "Apple A15 Bionic",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },


    // =========================
    // SAMSUNG
    // =========================

    15: {
        description: "A flagship Samsung phone designed for advanced photography, gaming, productivity and premium entertainment.",
        camera: "Ultra multi-camera system",
        battery: "Large-capacity battery",
        display: "Large Dynamic AMOLED 2X",
        processor: "Samsung flagship processor",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    16: {
        description: "A premium Galaxy flagship combining a large high-refresh-rate display, advanced cameras and powerful performance.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "Dynamic AMOLED 2X",
        processor: "Galaxy flagship processor",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    17: {
        description: "A powerful Galaxy phone built for photography, gaming, multitasking and everyday productivity.",
        camera: "Advanced triple/quad camera system",
        battery: "Large all-day battery",
        display: "Dynamic AMOLED 2X",
        processor: "Snapdragon/Exynos flagship platform",
        storage: "256GB / 512GB",
        network: "5G"
    },

    18: {
        description: "A premium Samsung smartphone with excellent cameras, a smooth display and strong flagship performance.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "Dynamic AMOLED 2X",
        processor: "Galaxy flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    19: {
        description: "A modern Galaxy flagship designed for fast performance, photography and immersive entertainment.",
        camera: "Advanced multi-camera system",
        battery: "All-day high-capacity battery",
        display: "Dynamic AMOLED 2X",
        processor: "Samsung flagship chipset",
        storage: "256GB / 512GB",
        network: "5G"
    },

    20: {
        description: "A premium Galaxy smartphone offering a bright high-refresh display, strong cameras and smooth performance.",
        camera: "Triple camera system",
        battery: "Large all-day battery",
        display: "Dynamic AMOLED 2X",
        processor: "Galaxy flagship chipset",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    21: {
        description: "A premium Samsung flagship featuring an impressive camera system, S Pen support, powerful performance and a large 120Hz display.",
        camera: "200MP + 50MP + 12MP + 10MP",
        battery: "5,000 mAh",
        display: "6.8-inch QHD+ Dynamic AMOLED 2X, 120Hz",
        processor: "Snapdragon 8 Gen 3 for Galaxy",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    22: {
        description: "A large Galaxy flagship designed for users who want a spacious display, powerful cameras and long battery life.",
        camera: "50MP + 10MP + 12MP rear cameras",
        battery: "4,900 mAh",
        display: "6.7-inch QHD+ Dynamic AMOLED 2X, 120Hz",
        processor: "Snapdragon 8 Gen 3 / Exynos 2400",
        storage: "256GB / 512GB",
        network: "5G"
    },

    23: {
        description: "A compact Galaxy flagship offering excellent cameras, smooth performance and a bright 120Hz AMOLED display.",
        camera: "50MP + 10MP + 12MP rear cameras",
        battery: "4,000 mAh",
        display: "6.2-inch FHD+ Dynamic AMOLED 2X, 120Hz",
        processor: "Snapdragon 8 Gen 3 / Exynos 2400",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    24: {
        description: "A premium foldable Galaxy phone designed for multitasking, productivity and a large-screen smartphone experience.",
        camera: "Advanced multi-camera system",
        battery: "Large dual-cell battery",
        display: "Large foldable AMOLED display",
        processor: "Galaxy flagship processor",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    25: {
        description: "A premium foldable smartphone that combines a phone-sized cover screen with a large tablet-like inner display.",
        camera: "Triple rear camera system",
        battery: "Dual-cell battery",
        display: "Foldable Dynamic AMOLED display",
        processor: "Snapdragon flagship platform",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    26: {
        description: "A stylish compact foldable phone designed for portability, selfies and everyday entertainment.",
        camera: "Dual rear camera system",
        battery: "Dual-cell battery",
        display: "Foldable AMOLED display",
        processor: "Galaxy flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    27: {
        description: "A compact foldable Galaxy smartphone offering a flexible display, pocket-friendly design and strong everyday performance.",
        camera: "Dual rear cameras",
        battery: "3,700 mAh",
        display: "6.7-inch Foldable Dynamic AMOLED 2X",
        processor: "Snapdragon 8 Gen 3 for Galaxy",
        storage: "256GB / 512GB",
        network: "5G"
    },


    // =========================
    // GOOGLE PIXEL
    // =========================

    28: {
        description: "A premium Pixel flagship focused on computational photography, AI features, smooth performance and a large display.",
        camera: "Advanced triple rear camera system",
        battery: "Large all-day battery",
        display: "Large LTPO OLED display",
        processor: "Google Tensor flagship chip",
        storage: "256GB / 512GB / 1TB",
        network: "5G"
    },

    29: {
        description: "A premium Google phone combining advanced AI photography, a smooth display and powerful everyday performance.",
        camera: "Triple rear camera system",
        battery: "Large all-day battery",
        display: "LTPO OLED, high refresh rate",
        processor: "Google Tensor chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    30: {
        description: "A Pixel flagship built around Google's AI features, computational photography and clean Android experience.",
        camera: "Advanced multi-camera system",
        battery: "All-day battery",
        display: "OLED high-refresh display",
        processor: "Google Tensor chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    31: {
        description: "A premium Pixel designed around computational photography, AI tools and a large high-quality display.",
        camera: "50MP main + 48MP ultrawide + 48MP telephoto",
        battery: "5,060 mAh",
        display: "6.8-inch LTPO OLED, up to 120Hz",
        processor: "Google Tensor G4",
        storage: "128GB / 256GB / 512GB / 1TB",
        network: "5G"
    },

    32: {
        description: "A flagship Pixel smartphone offering excellent photography, Google's AI features and smooth Android performance.",
        camera: "50MP main + 48MP ultrawide + 48MP telephoto",
        battery: "Large all-day battery",
        display: "6.3-inch LTPO OLED, up to 120Hz",
        processor: "Google Tensor G4",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    33: {
        description: "A clean Android flagship with Google's computational photography, AI features and smooth everyday performance.",
        camera: "50MP main + 48MP ultrawide + 48MP telephoto",
        battery: "4,700 mAh",
        display: "6.3-inch OLED, up to 120Hz",
        processor: "Google Tensor G4",
        storage: "128GB / 256GB",
        network: "5G"
    },

    34: {
        description: "A compact Pixel designed for users who want Google's software experience, smart photography and dependable performance.",
        camera: "Advanced Pixel camera system",
        battery: "All-day battery",
        display: "OLED high-refresh display",
        processor: "Google Tensor-class processor",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // XIAOMI
    // =========================

    35: {
        description: "A Xiaomi flagship designed for high performance, photography and immersive entertainment.",
        camera: "Flagship multi-camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    36: {
        description: "A powerful Xiaomi smartphone combining a bright AMOLED display, fast charging and strong cameras.",
        camera: "High-resolution triple camera",
        battery: "Large battery with fast charging",
        display: "AMOLED, high refresh rate",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    37: {
        description: "A premium Xiaomi phone built for gaming, photography and demanding everyday applications.",
        camera: "Advanced triple camera",
        battery: "Large-capacity fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon high-performance chip",
        storage: "256GB / 512GB",
        network: "5G"
    },

    38: {
        description: "A stylish Xiaomi device offering strong performance, a vibrant AMOLED display and capable photography.",
        camera: "Triple rear camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED display",
        processor: "MediaTek/Snapdragon platform",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    39: {
        description: "A Xiaomi smartphone focused on smooth everyday performance, photography and long battery life.",
        camera: "High-resolution main camera",
        battery: "Large-capacity battery",
        display: "AMOLED display",
        processor: "Mid/high-range processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    40: {
        description: "A versatile Xiaomi phone with a smooth display, capable camera and strong everyday performance.",
        camera: "Triple camera system",
        battery: "Large battery",
        display: "High-refresh AMOLED",
        processor: "Efficient mobile processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    41: {
        description: "A performance-focused Xiaomi smartphone designed for gaming, streaming and everyday multitasking.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "High-refresh display",
        processor: "Performance-focused chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    42: {
        description: "A practical Xiaomi smartphone offering good battery endurance, a bright display and versatile photography.",
        camera: "High-resolution main camera",
        battery: "Large-capacity battery",
        display: "Large high-refresh display",
        processor: "Efficient mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // ONEPLUS
    // =========================

    43: {
        description: "A fast OnePlus flagship designed for gaming, smooth multitasking and premium photography.",
        camera: "Advanced triple camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    44: {
        description: "A performance-focused OnePlus phone with a smooth display, fast charging and capable cameras.",
        camera: "Triple rear camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED, high refresh rate",
        processor: "Snapdragon flagship platform",
        storage: "256GB / 512GB",
        network: "5G"
    },

    45: {
        description: "A premium OnePlus smartphone built for speed, gaming and everyday multitasking.",
        camera: "High-resolution triple camera",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon performance chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    46: {
        description: "A stylish OnePlus device combining a fluid display, fast performance and strong battery endurance.",
        camera: "Advanced multi-camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED 120Hz-class display",
        processor: "Snapdragon/MediaTek processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    47: {
        description: "A fast everyday smartphone offering smooth gaming, multitasking and dependable photography.",
        camera: "Triple camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "High-performance mobile chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    48: {
        description: "A OnePlus phone designed for smooth daily use, entertainment and fast charging.",
        camera: "Multi-camera system",
        battery: "Large battery with fast charging",
        display: "AMOLED display",
        processor: "Efficient performance chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // SONY
    // =========================

    49: {
        description: "A premium Sony smartphone designed for photography, cinematic video, music and entertainment.",
        camera: "Professional-style multi-camera system",
        battery: "Large-capacity battery",
        display: "4K-class OLED display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    50: {
        description: "A Sony flagship focused on creators, photography, video recording and premium media consumption.",
        camera: "Advanced triple camera system",
        battery: "Large all-day battery",
        display: "High-resolution OLED display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    51: {
        description: "A premium Xperia phone with a cinematic display, excellent audio and advanced camera controls.",
        camera: "Triple rear camera system",
        battery: "Large-capacity battery",
        display: "OLED cinematic display",
        processor: "Snapdragon flagship chipset",
        storage: "256GB",
        network: "5G"
    },

    52: {
        description: "A compact Sony smartphone offering flagship performance, strong cameras and premium multimedia features.",
        camera: "Advanced triple camera system",
        battery: "Large battery",
        display: "OLED high-refresh display",
        processor: "Snapdragon flagship processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    53: {
        description: "A Sony smartphone built for photography, video, music and everyday entertainment.",
        camera: "Multi-camera system",
        battery: "All-day battery",
        display: "High-resolution OLED",
        processor: "Snapdragon processor",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // MOTOROLA
    // =========================

    54: {
        description: "A Motorola flagship with a large display, capable cameras and smooth everyday performance.",
        camera: "High-resolution triple camera",
        battery: "Large fast-charging battery",
        display: "pOLED high-refresh display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    55: {
        description: "A stylish Motorola phone offering a bright display, capable cameras and long battery life.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "pOLED display",
        processor: "Snapdragon processor",
        storage: "256GB",
        network: "5G"
    },

    56: {
        description: "A Motorola smartphone designed for smooth everyday performance and entertainment.",
        camera: "Triple rear camera system",
        battery: "Large battery",
        display: "High-refresh OLED display",
        processor: "MediaTek/Snapdragon chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    57: {
        description: "A practical Motorola phone with a large screen, versatile camera and dependable battery.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "Large high-refresh display",
        processor: "Mid-range mobile chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    58: {
        description: "An affordable Motorola smartphone designed for social media, streaming and everyday communication.",
        camera: "Dual/triple camera system",
        battery: "Long-lasting battery",
        display: "Large display",
        processor: "Efficient mobile processor",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // OPPO
    // =========================

    59: {
        description: "A premium OPPO smartphone combining stylish design, fast charging and advanced photography.",
        camera: "Advanced multi-camera system",
        battery: "Large battery with fast charging",
        display: "AMOLED high-refresh display",
        processor: "Flagship mobile processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    60: {
        description: "A high-performance OPPO phone designed for photography, gaming and smooth everyday use.",
        camera: "High-resolution triple camera",
        battery: "Large fast-charging battery",
        display: "AMOLED display",
        processor: "Snapdragon/MediaTek flagship chip",
        storage: "256GB / 512GB",
        network: "5G"
    },

    61: {
        description: "A stylish OPPO device with strong cameras, a bright display and excellent charging performance.",
        camera: "Triple rear camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "High-performance chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    62: {
        description: "A versatile OPPO smartphone designed for photography, entertainment and everyday multitasking.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "AMOLED display",
        processor: "Efficient performance chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    63: {
        description: "An affordable OPPO phone offering a large display, dependable battery and versatile cameras.",
        camera: "Dual/triple camera system",
        battery: "Large battery",
        display: "Large high-refresh display",
        processor: "Mid-range chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // VIVO
    // =========================

    64: {
        description: "A premium Vivo phone focused on portrait photography, smooth performance and fast charging.",
        camera: "Advanced portrait camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Flagship mobile processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    65: {
        description: "A Vivo flagship designed for photography, gaming and immersive entertainment.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "AMOLED 120Hz-class display",
        processor: "High-performance chipset",
        storage: "256GB / 512GB",
        network: "5G"
    },

    66: {
        description: "A stylish Vivo smartphone offering strong portrait photography and smooth everyday performance.",
        camera: "High-resolution portrait camera",
        battery: "Large fast-charging battery",
        display: "AMOLED display",
        processor: "MediaTek/Snapdragon processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    67: {
        description: "A versatile Vivo phone with a bright display, capable cameras and long battery life.",
        camera: "Triple rear camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "Efficient mobile chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    68: {
        description: "An affordable Vivo smartphone built for photography, social media and everyday entertainment.",
        camera: "Multi-camera system",
        battery: "Long-lasting battery",
        display: "Large display",
        processor: "Mid-range processor",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // HUAWEI
    // =========================

    69: {
        description: "A premium Huawei smartphone focused on photography, elegant design and powerful everyday performance.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "High-resolution OLED",
        processor: "Huawei Kirin platform",
        storage: "256GB / 512GB",
        network: "5G/4G depending on model"
    },

    70: {
        description: "A Huawei flagship designed around advanced photography and a premium OLED display.",
        camera: "Advanced multi-camera system",
        battery: "Large fast-charging battery",
        display: "OLED high-refresh display",
        processor: "Huawei Kirin processor",
        storage: "256GB / 512GB",
        network: "5G/4G depending on model"
    },

    71: {
        description: "A premium Huawei phone combining strong cameras, elegant design and long battery endurance.",
        camera: "Triple/quad camera system",
        battery: "Large-capacity battery",
        display: "OLED display",
        processor: "Kirin platform",
        storage: "256GB / 512GB",
        network: "5G/4G"
    },

    72: {
        description: "A Huawei smartphone designed for photography, communication and everyday entertainment.",
        camera: "Advanced camera system",
        battery: "Large battery",
        display: "OLED display",
        processor: "Kirin mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },

    73: {
        description: "A practical Huawei phone offering a large display, capable camera and dependable battery life.",
        camera: "Multi-camera system",
        battery: "Long-lasting battery",
        display: "Large OLED/LCD display",
        processor: "Huawei mobile chipset",
        storage: "128GB / 256GB",
        network: "4G/5G depending on model"
    },


    // =========================
    // NOTHING
    // =========================

    74: {
        description: "A distinctive Nothing smartphone combining transparent-inspired design, clean software and smooth performance.",
        camera: "Dual high-resolution camera system",
        battery: "Large all-day battery",
        display: "OLED high-refresh display",
        processor: "Snapdragon mobile processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    75: {
        description: "A stylish Nothing phone with a clean interface, unique design and smooth high-refresh display.",
        camera: "Dual rear camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    76: {
        description: "A modern Nothing smartphone designed for users who want a clean Android experience and distinctive design.",
        camera: "Dual camera system",
        battery: "All-day battery",
        display: "OLED high-refresh display",
        processor: "Efficient Snapdragon chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // HONOR
    // =========================

    77: {
        description: "A premium HONOR smartphone designed for photography, gaming and immersive entertainment.",
        camera: "Advanced multi-camera system",
        battery: "Large fast-charging battery",
        display: "High-resolution AMOLED",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    78: {
        description: "A stylish HONOR device with a bright AMOLED display, strong cameras and long battery life.",
        camera: "Triple rear camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "High-performance chipset",
        storage: "256GB",
        network: "5G"
    },

    79: {
        description: "A capable HONOR smartphone offering smooth performance, photography and fast charging.",
        camera: "Multi-camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED display",
        processor: "Snapdragon/MediaTek chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    80: {
        description: "An affordable HONOR phone designed for everyday communication, social media and entertainment.",
        camera: "Dual/triple camera system",
        battery: "Long-lasting battery",
        display: "Large high-refresh display",
        processor: "Efficient mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // ASUS
    // =========================

    81: {
        description: "A performance-focused ASUS smartphone built especially for demanding gaming and high-performance use.",
        camera: "Advanced multi-camera system",
        battery: "Large gaming-focused battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    82: {
        description: "A compact ASUS performance phone offering powerful hardware and a smooth gaming display.",
        camera: "Dual/triple camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon flagship chipset",
        storage: "256GB / 512GB",
        network: "5G"
    },

    83: {
        description: "A gaming-oriented ASUS smartphone designed for high FPS gaming and demanding applications.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "High-refresh AMOLED",
        processor: "Snapdragon performance chipset",
        storage: "256GB / 512GB",
        network: "5G"
    },


    // =========================
    // REALME
    // =========================

    84: {
        description: "A fast Realme smartphone combining a high-refresh display, capable camera and fast charging.",
        camera: "High-resolution triple camera",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "MediaTek/Snapdragon chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    85: {
        description: "A performance-focused Realme phone designed for gaming, social media and everyday multitasking.",
        camera: "Triple camera system",
        battery: "Large-capacity battery",
        display: "High-refresh AMOLED",
        processor: "Performance-focused chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    86: {
        description: "An affordable Realme smartphone offering strong battery life, a large display and versatile cameras.",
        camera: "Multi-camera system",
        battery: "Large long-lasting battery",
        display: "Large high-refresh display",
        processor: "Efficient mobile processor",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // ZTE
    // =========================

    87: {
        description: "A powerful ZTE smartphone designed for gaming, entertainment and demanding applications.",
        camera: "Advanced multi-camera system",
        battery: "Large gaming battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon performance processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    88: {
        description: "A performance-oriented ZTE device with a smooth display, large battery and capable cameras.",
        camera: "Triple rear camera system",
        battery: "Large-capacity battery",
        display: "High-refresh AMOLED",
        processor: "High-performance chipset",
        storage: "256GB",
        network: "5G"
    },

    89: {
        description: "A versatile ZTE smartphone offering strong everyday performance and a large immersive display.",
        camera: "Multi-camera system",
        battery: "Large battery",
        display: "Large high-refresh display",
        processor: "Efficient performance chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // TCL
    // =========================

    90: {
        description: "A TCL smartphone designed for everyday communication, streaming and comfortable viewing.",
        camera: "Multi-camera system",
        battery: "Long-lasting battery",
        display: "Large NXTVISION display",
        processor: "Efficient mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },

    91: {
        description: "An affordable TCL phone offering a large display, dependable battery and useful everyday cameras.",
        camera: "Dual/triple camera system",
        battery: "Large battery",
        display: "Large high-quality display",
        processor: "Mid-range chipset",
        storage: "64GB / 128GB",
        network: "5G/4G"
    },


    // =========================
    // NOKIA
    // =========================

    92: {
        description: "A practical Nokia smartphone focused on reliability, clean software and everyday communication.",
        camera: "Dual/triple camera system",
        battery: "Long-lasting battery",
        display: "Large LCD/OLED display",
        processor: "Efficient mobile chipset",
        storage: "64GB / 128GB",
        network: "4G/5G"
    },

    93: {
        description: "A dependable Nokia phone designed for communication, social media and everyday entertainment.",
        camera: "Multi-camera system",
        battery: "Long-lasting battery",
        display: "Large display",
        processor: "Efficient mobile processor",
        storage: "64GB / 128GB",
        network: "4G/5G"
    },


    // =========================
    // MICROSOFT
    // =========================

    94: {
        description: "A demonstration foldable-style Microsoft Surface device designed to showcase productivity across multiple screens.",
        camera: "Dual-camera system — DEMO",
        battery: "Dual-cell battery — DEMO",
        display: "Dual foldable-style displays",
        processor: "Microsoft/Qualcomm platform — DEMO",
        storage: "256GB / 512GB",
        network: "5G — DEMO"
    },


    // =========================
    // FAIRPHONE
    // =========================

    95: {
        description: "A repair-focused smartphone designed around longevity, modular components and everyday usability.",
        camera: "High-resolution main camera",
        battery: "Replaceable battery",
        display: "OLED high-resolution display",
        processor: "Qualcomm mobile processor",
        storage: "256GB",
        network: "5G"
    },

    96: {
        description: "A modular smartphone focused on repairability, long-term use and responsible hardware design.",
        camera: "High-resolution dual camera system",
        battery: "Replaceable battery",
        display: "OLED display",
        processor: "Efficient Qualcomm chipset",
        storage: "256GB",
        network: "5G"
    },


    // =========================
    // TECNO
    // =========================

    97: {
        description: "A feature-rich TECNO smartphone designed for photography, entertainment and everyday performance.",
        camera: "High-resolution multi-camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "MediaTek chipset",
        storage: "256GB",
        network: "5G"
    },

    98: {
        description: "A stylish TECNO phone offering a large display, capable cameras and long battery life.",
        camera: "Triple camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "MediaTek processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    99: {
        description: "An affordable TECNO smartphone designed for social media, photography and entertainment.",
        camera: "Multi-camera system",
        battery: "Large battery",
        display: "Large high-refresh display",
        processor: "MediaTek mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // INFINIX
    // =========================

    100: {
        description: "A powerful Infinix smartphone built for gaming, entertainment and fast everyday performance.",
        camera: "High-resolution triple camera",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "MediaTek performance chipset",
        storage: "256GB",
        network: "5G"
    },

    101: {
        description: "A stylish Infinix phone offering strong battery endurance, a smooth display and capable cameras.",
        camera: "High-resolution camera system",
        battery: "Large-capacity fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "MediaTek chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },

    102: {
        description: "An affordable Infinix smartphone designed for gaming, social media and everyday entertainment.",
        camera: "Multi-camera system",
        battery: "Large long-lasting battery",
        display: "Large high-refresh display",
        processor: "MediaTek mobile processor",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // LAVA
    // =========================

    103: {
        description: "A practical Lava smartphone designed for everyday communication, entertainment and social media.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "AMOLED/LCD display",
        processor: "Efficient mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // SHARP
    // =========================

    104: {
        description: "A Sharp smartphone combining a high-quality display, dependable performance and capable photography.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "Sharp high-resolution display",
        processor: "Efficient mobile processor",
        storage: "128GB / 256GB",
        network: "5G"
    },

    105: {
        description: "A Sharp phone designed for users who value display quality, everyday performance and battery life.",
        camera: "Dual/triple camera system",
        battery: "Long-lasting battery",
        display: "High-resolution display",
        processor: "Mid-range mobile chipset",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // LEICA
    // =========================

    106: {
        description: "A photography-focused Leica smartphone concept designed around premium imaging and a distinctive camera experience.",
        camera: "Premium Leica-inspired camera system",
        battery: "Large-capacity battery",
        display: "High-resolution OLED display",
        processor: "High-performance mobile processor",
        storage: "256GB / 512GB",
        network: "5G"
    },


    // =========================
    // REDMAGIC
    // =========================

    107: {
        description: "A dedicated gaming smartphone built for high frame rates, sustained performance and demanding mobile games.",
        camera: "Multi-camera system",
        battery: "Large gaming battery",
        display: "High-refresh AMOLED gaming display",
        processor: "Snapdragon flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    108: {
        description: "A gaming-focused RedMagic phone designed for competitive gaming and long gaming sessions.",
        camera: "Multi-camera system",
        battery: "Large-capacity gaming battery",
        display: "High-refresh AMOLED",
        processor: "Snapdragon performance chipset",
        storage: "256GB / 512GB",
        network: "5G"
    },


    // =========================
    // POCO
    // =========================

    109: {
        description: "A performance-focused POCO smartphone designed for gaming, speed and excellent value.",
        camera: "High-resolution multi-camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon/MediaTek performance chip",
        storage: "256GB / 512GB",
        network: "5G"
    },

    110: {
        description: "A fast POCO phone offering a high-refresh display, large battery and strong gaming performance.",
        camera: "Triple camera system",
        battery: "Large-capacity fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Performance-focused chipset",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // IQOO
    // =========================

    111: {
        description: "A high-performance iQOO smartphone built for gaming, fast performance and smooth multitasking.",
        camera: "Advanced multi-camera system",
        battery: "Large fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "Snapdragon/MediaTek flagship processor",
        storage: "256GB / 512GB",
        network: "5G"
    },

    112: {
        description: "A gaming-oriented iQOO phone with powerful hardware, fast charging and a responsive display.",
        camera: "Triple camera system",
        battery: "Large-capacity fast-charging battery",
        display: "AMOLED high-refresh display",
        processor: "High-performance Snapdragon/MediaTek chip",
        storage: "256GB / 512GB",
        network: "5G"
    },


    // =========================
    // MEIZU
    // =========================

    113: {
        description: "A stylish Meizu smartphone designed for smooth everyday use, photography and entertainment.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "AMOLED high-refresh display",
        processor: "Qualcomm/Snapdragon mobile processor",
        storage: "256GB",
        network: "5G"
    },


    // =========================
    // HTC
    // =========================

    114: {
        description: "A modern HTC smartphone designed for everyday communication, multimedia and reliable performance.",
        camera: "Multi-camera system",
        battery: "Large-capacity battery",
        display: "High-resolution display",
        processor: "Qualcomm mobile processor",
        storage: "128GB / 256GB",
        network: "5G/4G"
    },


    // =========================
    // SONY EXTRA
    // =========================

    115: {
        description: "A Sony Xperia smartphone designed for creators, photography, video recording and premium entertainment.",
        camera: "Professional-style multi-camera system",
        battery: "Large-capacity battery",
        display: "High-resolution OLED display",
        processor: "Snapdragon processor",
        storage: "256GB",
        network: "5G"
    },


    // =========================
    // SAMSUNG EXTRA
    // =========================

    116: {
        description: "A Samsung Galaxy smartphone combining a bright AMOLED display, capable cameras and smooth performance.",
        camera: "Advanced multi-camera system",
        battery: "Large-capacity battery",
        display: "Dynamic AMOLED display",
        processor: "Galaxy mobile processor",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    117: {
        description: "A Samsung phone designed for everyday performance, photography, entertainment and multitasking.",
        camera: "Multi-camera system",
        battery: "Long-lasting battery",
        display: "AMOLED high-refresh display",
        processor: "Samsung mobile processor",
        storage: "128GB / 256GB",
        network: "5G"
    },


    // =========================
    // APPLE EXTRA
    // =========================

    118: {
        description: "A premium iPhone offering excellent photography, smooth performance and Apple's polished software experience.",
        camera: "Advanced dual/pro camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    119: {
        description: "A powerful iPhone designed for photography, video, gaming and everyday multitasking.",
        camera: "Advanced camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A-series chip",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    },

    120: {
        description: "A popular iPhone offering reliable performance, excellent photography and a premium OLED display.",
        camera: "Dual 12MP camera system",
        battery: "All-day battery",
        display: "Super Retina XDR OLED",
        processor: "Apple A15 Bionic",
        storage: "128GB / 256GB / 512GB",
        network: "5G"
    }
};

// =====================================================
// CLOSE PRODUCT DETAILS
// =====================================================

document.getElementById(
    "closeProductDetails"
).addEventListener(
    "click",
    function() {

        closeProductDetails();

    }
);


function closeProductDetails() {

    productDetailsOverlay.style.display = "none";

}


// =====================================================
// OPEN PRODUCT DETAILS
// =====================================================

function openProductDetails(phoneId) {

    // Find the phone that was clicked
    let phone =
        phones.find(function(item) {

            return item.id === phoneId;

        });


    // Stop if the phone does not exist
    if (!phone) {

        return;

    }


    // Calculate the discounted price
    let salePrice =
        calculateSalePrice(
            phone.price,
            phone.discount
        );


    // Get the detailed information
    let details =
        phoneDetails[phone.id] || {
            description: "Product details are not available yet.",
            camera: "Not specified",
            battery: "Not specified",
            display: "Not specified",
            processor: "Not specified",
            storage: "Not specified",
            network: "Not specified"
        };


    // Build the popup
    productDetailsContent.innerHTML = `

        <div class="product-details">


            <!-- PHONE IMAGE -->

            <div>

                <img
                    class="product-details-image"
                    src="${escapeHTML(phone.image)}"
                    alt="${escapeHTML(phone.name)}"
                >

            </div>


            <!-- PHONE INFORMATION -->

            <div class="product-details-info">


                <span class="discount">

                    ${phone.discount}% OFF

                </span>


                <h2>

                    ${escapeHTML(phone.name)}

                </h2>


                <p class="details-brand">

                    ${escapeHTML(phone.brand)}

                </p>


                <p class="details-description">

                    ${escapeHTML(details.description)}

                </p>


                <!-- SPECIFICATIONS -->

                <div class="specifications">


                    <div class="spec-item">

                        <strong>
                            📷 Camera
                        </strong>

                        <span>
                            ${escapeHTML(details.camera)}
                        </span>

                    </div>


                    <div class="spec-item">

                        <strong>
                            🔋 Battery
                        </strong>

                        <span>
                            ${escapeHTML(details.battery)}
                        </span>

                    </div>


                    <div class="spec-item">

                        <strong>
                            🖥️ Display
                        </strong>

                        <span>
                            ${escapeHTML(details.display)}
                        </span>

                    </div>


                    <div class="spec-item">

                        <strong>
                            ⚡ Processor
                        </strong>

                        <span>
                            ${escapeHTML(details.processor)}
                        </span>

                    </div>


                    <div class="spec-item">

                        <strong>
                            💾 Storage
                        </strong>

                        <span>
                            ${escapeHTML(details.storage)}
                        </span>

                    </div>


                    <div class="spec-item">

                        <strong>
                            📶 Network
                        </strong>

                        <span>
                            ${escapeHTML(details.network)}
                        </span>

                    </div>


                </div>


                <!-- PRICE -->

                <div class="details-price">


                    <span class="details-old-price">
                       ${formatPrice(phone.price)}
                    </span>


                    <span class="details-sale-price">

                        ${formatPrice(salePrice)}

                    </span>


                </div>


                <!-- ADD TO CART -->

                <button
                    class="details-add-cart"
                    onclick="addToCart(${phone.id}); closeProductDetails();"
                >

                    ${translations[currentLanguage].addCart}

                </button>


            </div>


        </div>

    `;


    // Show popup
    productDetailsOverlay.style.display = "flex";

}

// =====================================================
// BRAND FILTER
// =====================================================

function createBrandFilter() {

    brandFilter.innerHTML = `

        <option value="all">

            ${translations[currentLanguage].allBrands}

        </option>

    `;


    let uniqueBrands = [];


    phones.forEach(function(phone) {

        if (!uniqueBrands.includes(phone.brand)) {

            uniqueBrands.push(phone.brand);

        }

    });


    uniqueBrands.sort();


    uniqueBrands.forEach(function(brand) {

        let option =
            document.createElement("option");

        option.value = brand;

        option.textContent = brand;

        brandFilter.appendChild(option);

    });

}


// =====================================================
// FILTER PHONES
// =====================================================

function filterPhones() {

    let searchText =
        searchInput.value.toLowerCase();


    let selectedBrand =
        brandFilter.value;


    let filtered =
        phones.filter(function(phone) {

            let matchesSearch =
                phone.name
                    .toLowerCase()
                    .includes(searchText)
                ||
                phone.brand
                    .toLowerCase()
                    .includes(searchText);


            let matchesBrand =
                selectedBrand === "all"
                ||
                phone.brand === selectedBrand;


            return matchesSearch && matchesBrand;

        });


    if (sortSelect.value === "low") {

        filtered.sort(function(a, b) {

            return calculateSalePrice(
                a.price,
                a.discount
            )
            -
            calculateSalePrice(
                b.price,
                b.discount
            );

        });

    }


    if (sortSelect.value === "high") {

        filtered.sort(function(a, b) {

            return calculateSalePrice(
                b.price,
                b.discount
            )
            -
            calculateSalePrice(
                a.price,
                a.discount
            );

        });

    }


    if (sortSelect.value === "discount") {

        filtered.sort(function(a, b) {

            return b.discount - a.discount;

        });

    }


    displayPhones(filtered);

}


// =====================================================
// ADD TO CART
// =====================================================

function addToCart(phoneId) {

    let phone =
        phones.find(function(item) {

            return item.id === phoneId;

        });


    if (!phone) {

        return;

    }


    let existingItem =
        cart.find(function(item) {

            return item.phone.id === phoneId;

        });


    if (existingItem) {

        if (existingItem.quantity < phone.stock) {

            existingItem.quantity++;

        }

    } else {

        cart.push({

            phone: phone,

            quantity: 1

        });

    }


    updateCart();

}


// =====================================================
// SPECIAL PHONE
// =====================================================

function addSpecialPhone() {

    addToCart(1);

}


// =====================================================
// UPDATE CART
// =====================================================

function updateCart() {

    cartItems.innerHTML = "";


    let total = 0;

    let totalQuantity = 0;


    cart.forEach(function(item) {

        let phone = item.phone;

        let salePrice =
            calculateSalePrice(
                phone.price,
                phone.discount
            );


        total += salePrice * item.quantity;

        totalQuantity += item.quantity;


        let cartItem =
            document.createElement("div");


        cartItem.classList.add("cart-item");


       cartItem.innerHTML = `
    <div class="cart-product-info">

        <img
            src="${escapeHTML(phone.image)}"
            alt="${escapeHTML(phone.name)}"
            class="cart-product-image"
        >

        <div>
            <strong>${escapeHTML(phone.name)}</strong>
            <br>
            ${formatPrice(salePrice)}
        </div>

    </div>

    <div class="quantity-controls">

                <button
                    onclick="changeQuantity(${phone.id}, -1)">
                    -
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="changeQuantity(${phone.id}, 1)">
                    +
                </button>


                <button
                    class="remove-item"
                    onclick="removeFromCart(${phone.id})">

                    ×

                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });

let deliveryFee = 10;

let finalTotal =
    total + deliveryFee;


document.getElementById(
    "cartSubtotal"
).textContent =
    formatPrice(total);


document.getElementById(
    "cartDelivery"
).textContent =
    formatPrice(deliveryFee);


cartTotal.textContent =
    formatPrice(finalTotal);


    cartCount.textContent =
        totalQuantity;

}


// =====================================================
// CHANGE QUANTITY
// =====================================================

function changeQuantity(phoneId, change) {

    let item =
        cart.find(function(item) {

            return item.phone.id === phoneId;

        });


    if (!item) {

        return;

    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(phoneId);

        return;

    }


    if (item.quantity > item.phone.stock) {

        item.quantity = item.phone.stock;

    }


    updateCart();

}


// =====================================================
// REMOVE FROM CART
// =====================================================

function removeFromCart(phoneId) {

    cart =
        cart.filter(function(item) {

            return item.phone.id !== phoneId;

        });


    updateCart();

}


// =====================================================
// CHECKOUT SUMMARY
// =====================================================

function createOrderSummary() {

    let summary = "";

    let total = 0;


    cart.forEach(function(item) {

        let salePrice =
            calculateSalePrice(
                item.phone.price,
                item.phone.discount
            );


        let itemTotal =
            salePrice * item.quantity;


        total += itemTotal;


        summary +=

            item.phone.name +

            " | Quantity: " +

            item.quantity +

            " | Price: $" +

            salePrice.toFixed(2) +

            " | Total: $" +

            itemTotal.toFixed(2) +

            "\n";

    });


    summary +=

        "\nORDER TOTAL: $" +

        total.toFixed(2);


    return summary;

}


// =====================================================
// OPEN CHECKOUT
// =====================================================

function openCheckout() {

    if (cart.length === 0) {

        showNotification(
            currentLanguage === "en"
                ? "Your cart is empty."
                : "Ihr Warenkorb ist leer.",
            "warning"
        );

        return;

    }

    if (currentUser && currentUser.email) {
        let checkoutEmail = document.getElementById("email");
        checkoutEmail.value = currentUser.email;
        checkoutEmail.readOnly = true;
    }


    checkoutSummary.innerHTML = `

        <strong>
            ${currentLanguage === "en"
                ? "Order Summary"
                : "Bestellübersicht"}
        </strong>

        <br><br>

        ${createOrderSummary().replace(/\n/g, "<br>")}

    `;


    cartOverlay.style.display = "none";

    checkoutOverlay.style.display = "flex";

}


// =====================================================
// FORM SUBMISSION
// =====================================================

let activeTransferOrder = null;
let transferCountdownInterval = null;


function displayTransferOrder(order) {

    activeTransferOrder = order;
    document.getElementById("transferOrderNumber").textContent = order.orderNumber;
    document.getElementById("transferAmount").textContent =
        "₦" + Number(order.amountNgn).toLocaleString("en-NG", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    document.getElementById("transferStatus").textContent =
        "Transfer the exact amount, then select “I have sent it”. Your order stays pending until approved.";
    document.getElementById("paymentSentBtn").disabled = false;
    document.getElementById("paymentSentBtn").style.display = "block";
    document.getElementById("bankTransferOverlay").style.display = "flex";

    if (transferCountdownInterval) {
        clearInterval(transferCountdownInterval);
    }
    updateTransferCountdown();
    transferCountdownInterval = setInterval(updateTransferCountdown, 1000);

}


function updateTransferCountdown() {

    if (!activeTransferOrder) {
        return;
    }

    let secondsLeft = Math.max(
        0,
        Math.ceil((Date.parse(activeTransferOrder.expiresAt) - Date.now()) / 1000)
    );
    let minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
    let seconds = String(secondsLeft % 60).padStart(2, "0");
    document.getElementById("transferCountdown").textContent = minutes + ":" + seconds;

    if (secondsLeft === 0 && activeTransferOrder.status === "Awaiting payment") {
        document.getElementById("paymentSentBtn").disabled = true;
        document.getElementById("transferStatus").textContent =
            "The 15-minute payment window has expired.";
        clearInterval(transferCountdownInterval);
    }

}


async function markTransferAsSent() {

    if (!activeTransferOrder || !currentUser) {
        return;
    }

    let button = document.getElementById("paymentSentBtn");
    button.disabled = true;

    try {
       let response = await fetch(
    (window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : window.location.origin) +
    "/orders/" +
    encodeURIComponent(activeTransferOrder.orderNumber) +
    "/payment-sent",
    {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: currentUser.email,
                    accessKey: getCustomerOrderAccessKey(currentUser.email)
                })
            }
        );
        let result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Could not update payment status.");
        }

        activeTransferOrder = result.order;
        document.getElementById("bankTransferOverlay").style.display = "none";
        clearInterval(transferCountdownInterval);
        activeTransferOrder = null;
        displayOrders();
        showOrderStatusPopup(
            "Order sent",
            "Your order has been sent. Please wait for approval."
        );
    } catch (error) {
        button.disabled = false;
        document.getElementById("transferStatus").textContent = error.message;
    }

}


async function createBankTransferOrder(event) {

    event.preventDefault();
    event.stopPropagation();

    if (!currentUser) {
        showNotification("Please log in before placing your order.", "warning");
        return;
    }

    if (cart.length === 0) {
        showNotification("Your cart is empty.", "warning");
        return;
    }

    orderLoadingOverlay.style.display = "flex";
    document.querySelector("#orderLoadingOverlay p").textContent = "Creating your order...";

    let payload = {
        customer: {
            name: document.getElementById("fullName").value,
            email: currentUser.email,
            phone: document.getElementById("phone").value,
            accessKey: getCustomerOrderAccessKey(currentUser.email)
        },
        delivery: {
            country: document.getElementById("country").value,
            city: document.getElementById("city").value,
            address: document.getElementById("address").value,
            postalCode: document.getElementById("postalCode").value,
            notes: document.getElementById("notes").value
        },
        items: cart.map(function(item) {
            return { id: item.phone.id, quantity: item.quantity };
        })
    };

    try {
        let response = await fetch(
    (window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : window.location.origin) +
    "/orders",
    {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        let result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Could not create your order.");
        }

        cart = [];
        updateCart();
        orderLoadingOverlay.style.display = "none";
        checkoutOverlay.style.display = "none";
        checkoutForm.reset();
        displayTransferOrder(result.order);
    } catch (error) {
        orderLoadingOverlay.style.display = "none";
        showNotification(error.message || "Could not connect to the order service.", "error");
    }

}


checkoutForm.addEventListener("submit", createBankTransferOrder);
document.getElementById("placeOrderButton").addEventListener(
    "click",
    createBankTransferOrder
);
document.getElementById("paymentSentBtn").addEventListener("click", markTransferAsSent);
document.getElementById("closeBankTransfer").addEventListener("click", function() {
    document.getElementById("bankTransferOverlay").style.display = "none";
    activeTransferOrder = null;
    clearInterval(transferCountdownInterval);
});

// =====================================================
// LANGUAGE
// =====================================================

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
    "gadgetRushLanguage",
    language
);
let languageSelect =
    document.getElementById("languageSelect");

if (currentCurrency === "EUR") {

    languageSelect.value = "EUR";

} else {

    languageSelect.value = currentCurrency;

}




    let elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(function(element) {

        let key =
            element.getAttribute("data-i18n");


        if (translations[language][key]) {

            element.textContent =
                translations[language][key];

        }

    });


    searchInput.placeholder =
        translations[language].search;


    createBrandFilter();

    filterPhones();

    updateCart();

}

function setCurrency(currency) {

    currentCurrency = currency;

    if (currency === "EUR") {

        setLanguage("de");

    } else {

        setLanguage("en");

    }
}

// =====================================================
// SEARCH
// =====================================================

searchInput.addEventListener(
    "input",
    filterPhones
);


// =====================================================
// BRAND
// =====================================================

brandFilter.addEventListener(
    "change",
    filterPhones
);


// =====================================================
// SORT
// =====================================================

sortSelect.addEventListener(
    "change",
    filterPhones
);


// =====================================================
// LANGUAGE SELECT
// =====================================================

document.getElementById(
    "languageSelect"
).addEventListener(
    "change",
    function() {

        setCurrency(this.value);

    }
);


// =====================================================
// CART BUTTON
// =====================================================

cartButton.addEventListener(
    "click",
    function() {

        cartOverlay.style.display = "flex";

    }
);


// =====================================================
// CLOSE CART
// =====================================================

document.getElementById(
    "closeCart"
).addEventListener(
    "click",
    function() {

        cartOverlay.style.display = "none";

    }
);


// =====================================================
// CHECKOUT BUTTON
// =====================================================

document.getElementById(
    "checkoutButton"
).addEventListener(
    "click",
    openCheckout
);


// =====================================================
// CLOSE CHECKOUT
// =====================================================

document.getElementById(
    "closeCheckout"
).addEventListener(
    "click",
    function() {

        checkoutOverlay.style.display = "none";

    }
);


// =====================================================
// SUCCESS
// =====================================================

function closeSuccess() {

    document.getElementById(
        "successOverlay"
    ).style.display = "none";

}


// =====================================================
// OFFER POPUP
// =====================================================

function closeOfferPopup() {

    document.getElementById(
        "offerPopup"
    ).style.display = "none";

}


document.getElementById(
    "closePopup"
).addEventListener(
    "click",
    closeOfferPopup
);


// =====================================================
// SHOW POPUP AFTER PAGE LOAD
// =====================================================

setTimeout(function() {

    document.getElementById(
        "offerPopup"
    ).style.display = "flex";

}, 1000);


// =====================================================
// SCROLL TO PRODUCTS
// =====================================================

function scrollToProducts() {

    document.getElementById(
        "productsSection"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// =====================================================
// DELIVERY ACTIVITY
// =====================================================

let deliveryExamples = [

    {
        name: "Anna Müller",
        city: "Berlin",
        product: "iPhone 16 Pro"
    },

    {
        name: "James Wilson",
        city: "London",
        product: "Galaxy S26 Ultra"
    },

    {
        name: "Sophie Martin",
        city: "Paris",
        product: "Pixel 11 Pro"
    },

    {
        name: "Daniel Weber",
        city: "Munich",
        product: "OnePlus 14"
    },

    {
        name: "Emma Johnson",
        city: "Manchester",
        product: "iPhone 17 Pro Max"
    },

    {
        name: "Lucas Schmidt",
        city: "Hamburg",
        product: "Xiaomi 17 Ultra"
    },

    {
        name: "Olivia Brown",
        city: "London",
        product: "Galaxy Z Fold"
    },

    {
        name: "Noah Fischer",
        city: "Frankfurt",
        product: "Xperia 1"
    }

];


let deliveryIndex = 0;


function updateDelivery() {

    let delivery =
        deliveryExamples[deliveryIndex];


    let ticker =
        document.getElementById(
            "deliveryTicker"
        );


    ticker.style.animation = "none";

    void ticker.offsetWidth;

    ticker.style.animation =
        "deliveryFade 1s ease";


    document.getElementById(
        "deliveryName"
    ).textContent =
        delivery.name;


    document.getElementById(
        "deliveryProduct"
    ).textContent =
        "📱 " + delivery.product;


    document.getElementById(
        "deliveryLocation"
    ).textContent =
        "📍 " + delivery.city;


    deliveryIndex++;


    if (
        deliveryIndex >=
        deliveryExamples.length
    ) {

        deliveryIndex = 0;

    }

}


updateDelivery();


setInterval(
    updateDelivery,
    4000
);



// =====================================================
// START WEBSITE
// =====================================================

createBrandFilter();

displayPhones(phones);
loadManagedProductValues();

updateCart();
setLanguage(currentLanguage);
updateAccountButton();
checkApprovedOrders();


window.addEventListener(
    "load",
    function() {

        pageLoadingOverlay.style.display =
            "none";

    }
);

