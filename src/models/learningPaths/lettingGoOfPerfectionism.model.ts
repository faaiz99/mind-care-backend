import {Schema, model} from 'mongoose'
const lettingGoOfPerfectionismSchema = new Schema({
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

export const lettingGoOfPerfectionism = model(
  "lettingGoOfPerfectionismMoney",
  lettingGoOfPerfectionismSchema
);
