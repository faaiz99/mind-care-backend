import {Schema, model} from 'mongoose'

const communicatingYourNeedsSchema = new Schema({
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

export const communicatingYourNeeds = model(
  "communicatingYourNeeds",
  communicatingYourNeedsSchema
);
