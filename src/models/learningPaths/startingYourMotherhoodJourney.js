const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const startingYourMotherhoodJourneySchema = new Schema({
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

const startingYourMotherhoodJourneyModel = mongoose.model(
  "startingYourMotherhoodJourney",
  startingYourMotherhoodJourneySchema
);
module.exports = startingYourMotherhoodJourneyModel;
