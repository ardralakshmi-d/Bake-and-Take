const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, "frontend")));

// Route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "location1.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
