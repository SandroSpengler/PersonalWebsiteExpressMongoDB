const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const { DB_CONNECTION, PORT } = require("./Config/config");
const APP = express();

const showRouter = require("./Route/Api/ShowController");
const characterRouter = require("./Route/Api/CharacterController");

APP.use(cors());

APP.get("/", (req, res) => {
  res.send("<h1>Main Page!!!!</h1>");
});

APP.use("/api/show", jsonParser, showRouter);
APP.use("/api/character", jsonParser, characterRouter);

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
