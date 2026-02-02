const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    category: "electronics"
  },
  {
    id: 2,
    name: "Cotton T-Shirt",
    price: 24.99,
    category: "clothing"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 89.99,
    category: "electronics"
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 59.99,
    category: "clothing"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
