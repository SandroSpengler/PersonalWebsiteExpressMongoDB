const express = require("express");

const APP = express();
const PORT = 5000;

APP.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

APP.listen(PORT, () => {
  console.log("Server is running");
});
