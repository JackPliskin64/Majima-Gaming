const products = [
  {
    name: "Yakuza Like A Dragon! for Xbox",
    price: 59.99,
    stars: 4.5,
    reviews: 120,
    seller: "Amazon",
    image: "./Assets/Yakuza 7.jpg",
    link: "https://www.amazon.es/Yakuza-Like-Dragon-Importaci%C3%B3n-alemana/dp/B088GJFLXP",
  },
  {
    name: "The Dragon of Dojima Bike Replica",
    price: 149.99,
    stars: 4.2,
    reviews: 85,
    seller: "Amazon",
    image: "./Assets/Bike.jpg",
    link: "https://www.amazon.com/Numskull-Yakuza-Dragon-Collectible-Replica/dp/B0B94PXKBV",
  },
  {
    name: "The Mad DUCK of Shimano Cosplaying Duck",
    price: 19.99,
    stars: 4.7,
    reviews: 150,
    seller: "Sega Shop",
    image: "./Assets/Duck.jpg",
    link: "https://www.segashop.co.uk/collections/yakuza/products/official-yakuza-majima-tubbz-cosplaying-duck-collectable",
  },
  {
    name: "Goro Majima 10-Inch PVC Figure",
    price: 39.99,
    stars: 4.0,
    reviews: 95,
    seller: "Estarland",
    image: "./Assets/Majima.jpg",
    link: "https://www.estarland.com/product-description/AnimeMerchandise/Yakuza-Goro-Majima-10-Inch-PVC-Figure/55012",
  },
  {
    name: "PS3 Yakuza 3 Edition",
    price: 24.99,
    stars: 3.8,
    reviews: 70,
    seller: "eBay",
    image: "./Assets/Yakuza 3.jpg",
    link: "https://www.ebay.com/itm/373990125201",
  },
  {
    name: "Dragon Phone Case",
    price: 14.99,
    stars: 4.6,
    reviews: 180,
    seller: "SEGA Shop",
    image: "./Assets/Phone.webp",
    link: "https://shop.sega.com/collections/yk2",
  },
  {
    name: "Dragon Jacket",
    price: 59.99,
    stars: 4.4,
    reviews: 110,
    seller: "Insert Coin Clothing",
    image: "./Assets/Jacket.jpg",
    link: "https://www.insertcoinclothing.com/outerwear/the-dragon-of-dojima.html",
  },
  {
    name: "Yakuza Notebook",
    price: 9.99,
    stars: 4.8,
    reviews: 200,
    seller: "Redbubble",
    image: "./Assets/Notebook.jpg",
    link: "https://www.redbubble.com/es/i/cuaderno/Kiryu-Kazuma-Yakuza-de-Prince-of-Sand/41487082.WX3NH",
  },
  {
    name: "Kazuma Kiryu Coffee Coscup",
    price: 12.99,
    stars: 4.9,
    reviews: 250,
    seller: "Just Geek",
    image: "./Assets/Coffee.webp",
    link: "https://www.justgeek.com/products/official-ryu-ga-gotoku-yakuza-kazuma-kiryu-coscups",
  },
  {
    name: "10 Years in the Joint...! T-shirt",
    price: 19.99,
    stars: 4.3,
    reviews: 120,
    seller: "Redbubble",
    image: "./Assets/10 years.jpg",
    link: "https://www.redbubble.com/es/shop/yakuza",
  },
];

function createProductCard(product) {
  const productLink = document.createElement("a");
  productLink.href = product.link;
  productLink.target = "_blank";

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.name;

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: $${product.price}`;

  const sellerInfo = document.createElement("p");
  sellerInfo.textContent = `Sold by: ${product.seller}`;

  productCard.appendChild(productImage);
  productCard.appendChild(productName);
  productCard.appendChild(productPrice);
  productCard.appendChild(sellerInfo);

  productLink.appendChild(productCard);

  return productLink;
}

function displayProducts() {
  const productContainer = document.querySelector(".product-container");
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

document.addEventListener("DOMContentLoaded", displayProducts);
