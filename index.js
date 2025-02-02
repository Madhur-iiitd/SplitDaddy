const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("Hello, Node.js!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const MongoDBconnect = require("./mongoDBconnect");
MongoDBconnect.connectDB();

