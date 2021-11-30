const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const CharacterRepository = require("../../Repository/Character/CharacterRepository");

router.get("/", async (req, res) => {
  try {
    const allUsers = await CharacterRepository.getAllUsers();

    res.send(await allUsers);
  } catch (error) {
    console.log("could not search for Characters: " + error.message);

    res.status(500);
    res.send("Error");
  }
});

router.post("/", jsonParser, async (req, res) => {
  // Todo
  // Validate Character Input

  try {
    const createdCharacter = CharacterRepository.createNewCharacter(req.body);

    res.send(await createdCharacter);
  } catch (error) {
    console.log("could not create character");

    res.send(error.message);
  }
});

module.exports = router;