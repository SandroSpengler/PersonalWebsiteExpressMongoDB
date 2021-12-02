const CharacterSchema = require("../../Model/Schema/CharacterSchema");

const getAllCharacters = async () => {
  try {
    let foundCharacters = await CharacterSchema.find();

    return foundCharacters;
  } catch (error) {
    console.log("could not find Characters: " + error.message);
  }

  return await searchAllUsers;
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
    tmpCharacter.showName = character.showName;
    tmpCharacter.firstName = character.firstName;
    tmpCharacter.lastName = character.lastName;
    tmpCharacter.age = character.age;

    savedCharacter = await tmpCharacter.save();

    return savedCharacter;
  } catch (error) {
    console.log("could not save character " + error.message);

    return error.message;
  }
};

module.exports = { getAllCharacters, getOneCharacter, createNewCharacter };
