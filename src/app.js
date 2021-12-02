const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const { DB_CONNECTION, PORT } = require("./Config/config");
const APP = express();

const CharacterRouter = require("./Route/Api/CharacterController");

APP.use(cors());

APP.get("/", (req, res) => {
  res.send("<h1>Main Page!!!!</h1>");
});

APP.use(
  "/api/character",
  (req, res, next) => {
    console.log("Middleware");
    next();
  },
  CharacterRouter
);

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
