// Define los productos simulados con los campos necesarios
const products = [
  {
    name: "Yakuza Like A Dragon! for Xbox",
    price: 59.99,
    stars: 4.5,
    reviews: 120,
    seller: "Amazon",
    image: "./Assets/Yakuza 7.jpg",
  },
  {
    name: "The Dragon of Dojima Bike Replica",
    price: 149.99,
    stars: 4.2,
    reviews: 85,
    seller: "Amazon",
    image: "./Assets/Bike.jpg",
  },
  {
    name: "The Mad DUCK of Shimano Cosplaying Duck",
    price: 19.99,
    stars: 4.7,
    reviews: 150,
    seller: "Sega Shop",
    image: "./Assets/Duck.jpg",
  },
  {
    name: "Goro Majima 10-Inch PVC Figure",
    price: 39.99,
    stars: 4.0,
    reviews: 95,
    seller: "Estarland",
    image: "./Assets/Majima.jpg",
  },
  {
    name: "PS3 Yakuza 3 Edition",
    price: 24.99,
    stars: 3.8,
    reviews: 70,
    seller: "eBay",
    image: "./Assets/Yakuza 3.jpg",
  },
  {
    name: "Dragon Phone Case",
    price: 14.99,
    stars: 4.6,
    reviews: 180,
    seller: "SEGA Shop",
    image: "./Assets/Phone.webp",
  },
  {
    name: "Dragon Jacket",
    price: 59.99,
    stars: 4.4,
    reviews: 110,
    seller: "Insert Coin Clothing",
    image: "./Assets/Jacket.jpg",
  },
  {
    name: "Yakuza Notebook",
    price: 9.99,
    stars: 4.8,
    reviews: 200,
    seller: "Redbubble",
    image: "./Assets/Notebook.jpg",
  },
  {
    name: "Kazuma Kiryu Coffee Coscup",
    price: 12.99,
    stars: 4.9,
    reviews: 250,
    seller: "Just Geek",
    image: "./Assets/Coffee.webp",
  },
  {
    name: "10 Years in the Joint...! T-shirt",
    price: 19.99,
    stars: 4.3,
    reviews: 120,
    seller: "Redbubble",
    image: "./Assets/10 years.jpg",
  },
];

// Función para crear una carta de producto y agregarla al DOM
function createProductCard(product) {
  const productCard = document.createElement("a");
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

  return productCard;
}

// Función para mostrar los productos en la página
function displayProducts() {
  const productContainer = document.querySelector(".product-container");
  products.forEach((product) => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}

// Llama a la función para mostrar los productos cuando se cargue el contenido
document.addEventListener("DOMContentLoaded", displayProducts);