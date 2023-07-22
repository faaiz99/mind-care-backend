const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lowMoodSchema = new Schema({
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

const lowMoodModel = mongoose.model("lowMood", lowMoodSchema);
module.exports = lowMoodModel;
