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

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;

    // Find the product by ID
    const product = products.find((p) => p._id === productId);

    if (!product) {
        // If the product is not found, return a 404 response
        res.status(404).json({ error: 'Product not found' });
    } else {
        // If the product is found, send it as JSON
        res.json(product);
    }
});

//App Listen
app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
});