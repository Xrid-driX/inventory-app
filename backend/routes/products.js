const express = require("express");
const db = require("../db.js");
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

//Add product
router.post ("/", (req, res) => {
    const { name, quantity, date } = req.body;
    db.run(
        `INSERT INTO products (name, quantity, date) VALUES (?, ?, ?)`,
        [name, quantity, date],
        function (err) {
            if (err) return res.status(500).json ({ error: err.message});
            res.json({ id: this.lastID, name, quantity, date });
        }
    );
});

//Update product
router.put("/:id", (req, res) => {
    const { id } = req=params;
    const { name,quantity, date } = req.body;
    db.run(
        `UPDATE products SET name=?, quantity=?, date=? WHERE id=?`, 
        [name, quantity, date, id],
        function (err) {
            if(err) return res.status(500).json({ error: err.message });
            res.json({ updated: this.changes });
        }
    );
});

// Delete product
router.delete("./:id", (req, res) => {
    db.run(`DELETE FROM products WHERE id=?`, [req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        req.json({ deleted: this.changes});
    });
});

module.exports = router;