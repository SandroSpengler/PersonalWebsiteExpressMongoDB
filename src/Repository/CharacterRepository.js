const CharacterSchema = require("../Model/Schema/CharacterSchema");

const getAllCharacters = async () => {
  try {
    let foundCharacters = await CharacterSchema.find();

    return foundCharacters;
  } catch (error) {
    console.log("could not find Characters: " + error.message);
  }
};

const getOneCharacter = async (id) => {
  try {
    const foundCharacter = await CharacterSchema.findById(id);

    return foundCharacter;
  } catch (error) {
    return error.message;
  }
};

const createNewCharacter = async (character) => {
  let tmpCharacter = new CharacterSchema();

  try {
    tmpCharacter.showId = character.showId;
    tmpCharacter.showName = character.showName;
    tmpCharacter.firstName = character.firstName;
    tmpCharacter.lastName = character.lastName;
    tmpCharacter.age = character.age;

    let savedCharacter = await tmpCharacter.save();

    return savedCharacter;
  } catch (error) {
    console.log("could not save character " + error.message);

    throw new Error(error.message);
  }
};

module.exports = { getAllCharacters, getOneCharacter, createNewCharacter };
