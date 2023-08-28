import {Schema, model} from 'mongoose'
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

export const startYourJourneyModel = model(
  "startYourJourney",
  startYourJourneySchema
);
module.exports = startYourJourneyModel;
