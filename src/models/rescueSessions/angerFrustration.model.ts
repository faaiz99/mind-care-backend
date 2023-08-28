import {Schema, model} from 'mongoose'

const angerAndFrustrationSchema = new Schema({
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

export const angerAndFrustrationModel = model(
  "angerAndFrustration",
  angerAndFrustrationSchema
);

