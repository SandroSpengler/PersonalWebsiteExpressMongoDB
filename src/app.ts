const mongoose = require("mongoose");

const { DB_CONNECTION, PORT } = require("./Config/config");

const express = require("express");

const APP = express();

APP.get("/", (req: any, res: any) => {
  res.send("<h1>Main Page!!!!</h1>");
});

APP.use("/api/character", require("./Route/Api/CharacterController"));

const connectToMongoDB = (): void => {
  mongoose
    .connect(DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err: Error) => {
      console.log(err.message);
    });
};

connectToMongoDB();

APP.listen(PORT, () => {
  console.log("Server is running");
});
