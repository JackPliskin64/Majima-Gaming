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
  // Añade aquí los otros productos restantes
];

// Función para crear una carta de producto y agregarla al DOM
function createProductCard(product) {
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