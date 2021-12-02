const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const CharacterRepository = require("../../Repository/Character/CharacterRepository");

router.get("/", async (req, res) => {
  try {
    const allCharacters = await CharacterRepository.getAllCharacters();

    res.send(await allCharacters);
  } catch (error) {
    console.log("could not search for Characters: " + error.message);

    res.status(500);
    res.send("Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundCharacter = await CharacterRepository.getOneCharacter(req.params.id);

    res.send(await foundCharacter);
  } catch (error) {
    console.log("could not find oneCharacter " + error.message);

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
