const express = require("express");

const APP = express();
const PORT = 5000;

APP.get("/", (req: any, res: any) => {
  res.send("<h1>Hello World</h1>");
});

APP.use("/api/character", require("./Route/Api/CharacterController"));

APP.listen(PORT, () => {
  console.log("Server is running");
});
