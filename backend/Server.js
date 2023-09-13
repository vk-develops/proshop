// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const products = require("./Data/Products");

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import products from "./Data/Products.js";

const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB();

const app = express();


//Middlewares
app.use(cors());


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
    console.log(`Server started in ${process.env.NODE_ENV} mode and running on port ${PORT}`);
});