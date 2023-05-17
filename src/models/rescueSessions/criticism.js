const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const criticismSchema = new Schema({
  questions: {
    type: String,
  },
  results: {
    type: String,
  },
  text: {
    type: String,
  },
  audio: {
    type: String,
  },
});

const criticismModel = mongoose.model("criticism", criticismSchema);
module.exports = criticismModel;
