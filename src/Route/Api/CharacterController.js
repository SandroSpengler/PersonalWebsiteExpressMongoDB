const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const CharacterRepository = require("../../Repository/Character/CharacterRepository");

router.get("/", async (req, res) => {
  const allUsers = CharacterRepository.getAllUsers();

  res.send(await allUsers);
});

router.post("/", jsonParser, async (req, res) => {
  // Todo
  // Validate Character Input

  const createdCharacter = CharacterRepository.createNewCharacter(req.body);

  res.send(await createdCharacter);
});

module.exports = router;
