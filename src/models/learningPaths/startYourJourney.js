const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const startYourJourneySchema = new Schema({
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

const startYourJourneyModel = mongoose.model(
  "startYourJourney",
  startYourJourneySchema
);
module.exports = startYourJourneyModel;
