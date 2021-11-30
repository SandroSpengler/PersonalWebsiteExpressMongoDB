const mongoose = require("mongoose");
const express = require("express");

const { DB_CONNECTION, PORT } = require("./Config/config");
const APP = express();

const bodyParser = require("body-parser");

const CharacterRouter = require("./Route/Api/CharacterController");

APP.get("/", (req, res) => {
  res.send("<h1>Main Page!!!!</h1>");
});

APP.use("/api/character", CharacterRouter);
APP.use(bodyParser.json());

const connectToMongoDB = () => {
  mongoose
    .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => {
      console.log(err.message);
    });
};

connectToMongoDB();

APP.listen(PORT, () => {
  console.log("Server is running");
});
