const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const overcomingDistractionsSchema = new Schema({
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

const overcomingDistractionsModel = mongoose.model(
  "overcomingDistractions",
  overcomingDistractionsSchema
);
module.exports = overcomingDistractionsModel;
