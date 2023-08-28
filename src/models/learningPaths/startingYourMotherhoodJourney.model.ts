import {Schema, model} from 'mongoose'


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

export const startingYourMotherhoodJourneyModel = model(
  "startingYourMotherhoodJourney",
  startingYourMotherhoodJourneySchema
);
module.exports = startingYourMotherhoodJourneyModel;
