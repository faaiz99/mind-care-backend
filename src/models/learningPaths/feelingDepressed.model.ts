const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feelingDepressedSchema = new Schema({
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

const feelingDepressedModel = mongoose.model(
  "feelingDepressed",
  feelingDepressednSchema
);
module.exports = feelingDepressedModel;
