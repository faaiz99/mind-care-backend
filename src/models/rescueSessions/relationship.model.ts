import {Schema, model } from 'mongoose'

const relationshipSchema = new Schema({
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

export const relationshipModel = model("relationship", relationshipSchema);
