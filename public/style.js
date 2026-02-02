const products = [
  {
    name: "Wireless Headphones",
    price: 129.99,
    category: "electronics"
  },
  {
    name: "Cotton T-Shirt",
    price: 24.99,
    category: "clothing"
  },
  {
    name: "Bluetooth Speaker",
    price: 89.99,
    category: "electronics"
  },
  {
    name: "Denim Jeans",
    price: 59.99,
    category: "clothing"
  }
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category");
const sortFilter = document.getElementById("sort");

// Display Products
function showProducts(data) {

  productList.innerHTML = "";

  data.forEach(p => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <div class="price">$${p.price}</div>
      <span class="tag ${p.category}">
        ${p.category}
      </span>
    `;

    productList.appendChild(card);
  });
}

// Filter + Sort
function updateProducts() {

  let filtered = [...products];

  // Category Filter
  const category = categoryFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Sort
  const sort = sortFilter.value;

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  showProducts(filtered);
}

// Events
categoryFilter.addEventListener("change", updateProducts);
sortFilter.addEventListener("change", updateProducts);

// Initial Load
showProducts(products);
