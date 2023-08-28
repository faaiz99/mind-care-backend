import {Schema, model} from 'mongoose'


const criticismSchema = new Schema({
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

export const criticismModel = model("criticism", criticismSchema);

