const CharacterRepository = require("../../Repository/Character/CharacterRepository");

const express = require("express");
const router = express.Router();

router.get("/", async (req: any, res: any) => {
  const allUsers = CharacterRepository.getAllUsers();

  res.send(await allUsers);
});

module.exports = router;

export {};
