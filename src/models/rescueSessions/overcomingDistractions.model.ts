import {Schema, model} from 'mongoose'

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

export const overcomingDistractionsModel = model(
  "overcomingDistractions",
  overcomingDistractionsSchema
);
