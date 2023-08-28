const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const improvingYourBodyImageSchema = new Schema({
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

const improvingYourBodyImageModel = mongoose.model(
  "improvingYourBodyImage",
  improvingYourBodyImageSchema
);
module.exports = improvingYourBodyImageModel;
