import {Schema, model} from 'mongoose'

const envySchema = new Schema({
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

export const envyModel = model("envy", envySchema);
