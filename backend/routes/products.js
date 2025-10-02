const express = require("express");
// const db = require("../db.js");
const router = express.Router();
const Product = require("../models/product.js")

//add a new product
router.post("/add", async (req, res) => {
    try {
        const { system, componentName, bin, invQty} = req.body;

        const product = new Product({
            system,
            componentName,
            bin,
            invQty
        });

        await product.save();
        res.json({ message: "Part added succesfuly!", product });
    
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// 📋 Get all products
router.get("/", async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Update Inventory qty by ID
router.put("/update/:id", async (req, res) => {
    try {
        const { invQty } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: { invQty, date: new Date() } },
            { new: true }
        );

        if (!product) return res.status(404).json({ message: "Item not found" });
        res.json({ message: "Inventory updated!", product });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a product
router.delete("/delete/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found!" });

        res.json({ message: "product deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;