const express = require("express");
const cors = require("cors");
// const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const router = express.Router();
const auth = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

//routes
// app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

//middleware app
app.use("/api/products", auth, productRoutes);

module.exports = router;