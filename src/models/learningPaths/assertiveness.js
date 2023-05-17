const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assertivenessSchema = new Schema({
  questions: {
    type: String,
  },
  results: {
    type: String,
  },
  content: {
    type: String,
  },
  audio: {
    type: String,
  },
});

const assertivenessModel = mongoose.model("assertiveness", assertivenessSchema);
module.exports = anxietyAndWorryModel;
