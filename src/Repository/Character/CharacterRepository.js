const CharacterSchema = require("../../Model/Schema/CharacterSchema");

const getAllUsers = async () => {
  const searchAllUsers = await { UserName: "John, Snow", Age: 25 };

  return await searchAllUsers;
};

const createNewCharacter = async (character) => {
  const tmp = { firstName: "abc" };

  return tmp;
};

module.exports = { getAllUsers, createNewCharacter };
