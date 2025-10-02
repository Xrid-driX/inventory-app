const jwt = require("jsonwebtoken");

function auth( res,req, next ) {
    const token = req.header("Authorization")?.split(" ") [1];
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    }
    catch (err) {
        req.status(400).json({ message: "Invalit token" });
    }
}

module.exports = auth;
