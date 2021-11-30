const CharacterSchema = require("../../Model/Schema/CharacterSchema");

const getAllUsers = async () => {
  try {
    let foundCharacters = await CharacterSchema.find();

    return foundCharacters;
  } catch (error) {
    console.log("could not find Characters: " + error.message);
  }

  return await searchAllUsers;
};

const createNewCharacter = async (character) => {
  let tmpCharacter = new CharacterSchema();

  try {
    tmpCharacter.showName = character.showName;
    tmpCharacter.firstName = character.firstName;
    tmpCharacter.lastName = character.lastName;
    tmpCharacter.age = character.age;

    savedCharacter = await tmpCharacter.save();

    return savedCharacter;
  } catch (error) {
    console.log("could not save character");
  }
};

module.exports = { getAllUsers, createNewCharacter };
