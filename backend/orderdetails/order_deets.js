const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "frontend")));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "order details.html"));
});

// Route to handle form submission
app.post("/submit-order", (req, res) => {
    const { productType, size, quantity, flavor, specialInstructions } = req.body;
    console.log("Order Received:", { productType, size, quantity, flavor, specialInstructions });
    res.send("Order submitted successfully!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
