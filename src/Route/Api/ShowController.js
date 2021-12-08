const express = require("express");
const router = express.Router();

const showRepository = require("../../Repository/ShowRepository");

router.get("/", async (req, res) => {
  try {
    const allShows = await showRepository.getAllShows();

    allShows.length > 0 ? (res.status = 200) : (res.status = 404);

    res.send(await allShows);
  } catch (error) {
    console.log("could not search for Shows: " + error.message);

    res.status(500);
    res.send("Error");
  }
});

router.post("/", async (req, res) => {
  try {
    if (await showRepository.showAlreadyExsits(req.body.showName)) {
      res.status(409);
      return res.send({ message: "document already exists" });
    }

    showRepository.createShow(req.body);

    return res.send(await req.body);
  } catch (error) {
    console.log("could not search for Shows: " + error.message);

    // res.status(500);
    // res.send("Error");
  }
});

module.exports = router;
