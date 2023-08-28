import {Schema, model} from 'mongoose'

const healingAfterABreakupSchema = new Schema({
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

export const healingAfterABreakup = model(
  "healingAfterABreakup",
  healingAfterABreakupSchema
);
