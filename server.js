const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Serve images
app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio running on port ${PORT}`);
});