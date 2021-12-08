const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  id: { type: Number },
  showId: { type: String, required: [true, "character must belong to a show"] },
  showName: { type: String },
  firstName: { type: String, required: [true, "character needs a first name"] },
  lastName: { type: String },
  age: { type: String, min: [0, "must be older than 0"] },
});

module.exports = mongoose.model("CharacterSchema", CharacterSchema);
