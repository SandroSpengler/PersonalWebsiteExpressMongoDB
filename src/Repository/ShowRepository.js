const ShowSchema = require("../Model/Schema/ShowSchema");

const getAllShows = async () => {
  try {
    let foundShows = await ShowSchema.find();

    return foundShows;
  } catch (error) {
    console.log("could not find Characters: " + error.message);
  }

  return await searchAllUsers;
};

const createShow = async (show) => {
  let tmpShow = new ShowSchema();

  try {
    tmpShow.showName = show.showName;
    tmpShow.releaseDate = show.releaseDate;
    tmpShow.seasons = show.seasons;

    const savedShow = await tmpShow.save();

    return savedShow;
  } catch (error) {
    console.log("could not save character " + error.message);

    throw new Error(error.message);
  }
};

const showAlreadyExsits = async (showName) => {
  try {
    const foundShow = await ShowSchema.find({ showName: showName });

    if (foundShow.length > 0) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllShows, createShow, showAlreadyExsits };
