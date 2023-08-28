import {Schema, model} from 'mongoose'

const managingBabyBluesAndPostpartumsDepressionSchema = new Schema({
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

export const managingBabyBluesAndPostpartumsDepressionModel = model(
  "managingBabyBluesAndPostpartumsDepression",
  managingBabyBluesAndPostpartumsDepressionSchema
);
