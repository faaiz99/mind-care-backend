const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepSchema = new Schema({
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

const sleepModel = mongoose.model("sleep", sleepSchema);
module.exports = sleepModel;
