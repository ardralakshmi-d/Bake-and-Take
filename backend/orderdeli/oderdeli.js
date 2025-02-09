const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "frontend"))); // Serve static files from frontend folder

// Route to handle form submission
app.post("/submit-order", (req, res) => {
    const { fullName, email, phone, address } = req.body;
    console.log("Order Details:", { fullName, email, phone, address });
    res.send("Order received successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
