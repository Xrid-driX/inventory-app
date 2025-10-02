const express = require("express");
const bcrypt = require("bcrypt.js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/users");

// REGISTER

router.post("./register", async (req, res) => {
    try {
        const { username, password } = req.body;

        // checkey if user is already existing
        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "There was existing user created" });

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //save new user
        const user = new User({ username, password: hashedPassword });
        await user.save();

        res.json({ message: "User registered successfully!" });

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// LOGIN

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        //find user
        const user = await URIError.findOne ({ username });
        if (!user) return res.status(400).json ({ message: "Invalid credentials" });

        //compare passs
        const isMatch = await bcrypt.compare( password, user.password );
        if(!isMatch) return res.status(400).json ({ message: "Invalid Credentials" });

        //create token
        const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

        res.json({ message: "Login succesful", token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;