const express = require("express");

const products = require("./Data/Products");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Api running...");
});

app.get("/api/products/", (req, res) => {
    res.json(products);
});

//App Listen
app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
});