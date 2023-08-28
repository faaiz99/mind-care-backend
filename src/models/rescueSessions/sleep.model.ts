import {Schema, model} from 'mongoose'
const sleepSchema = new Schema({
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

export const sleepModel = model("sleep", sleepSchema);

