const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { v4: uuidv4 } = require("uuid");

const ShowSchema = new Schema({
  showId: { type: String, default: uuidv4 },
  showName: { type: String, required: [true, "show needs a name"] },
  releaseDate: { type: Date, default: "" },
  seasons: { type: Number, default: 0 },
});

module.exports = mongoose.model("ShowSchema", ShowSchema);
