const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  id: { type: Number },
  showName: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  age: { type: String },
});

module.exports = mongoose.model("CharacterSchema", CharacterSchema);
