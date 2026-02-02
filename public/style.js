const productList = document.getElementById("product-list");
const filter = document.getElementById("filter");

let products = [];

// Fetch products from server
async function loadProducts() {
  const res = await fetch("/api/products");
  products = await res.json();
  displayProducts(products);
}

// Display Products
function displayProducts(data) {
  productList.innerHTML = "";

  data.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${product.name}</h3>
      <div class="price">$${product.price}</div>
      <span class="tag ${product.category}">
        ${product.category}
      </span>
    `;

    productList.appendChild(card);
  });
}

// Filter Logic
filter.addEventListener("change", () => {
  const value = filter.value;

  if (value === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(
      p => p.category === value
    );

    displayProducts(filtered);
  }
});

// Init
loadProducts();
