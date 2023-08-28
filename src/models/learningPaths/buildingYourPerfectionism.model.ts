import {Schema, model} from 'mongoose'


const buildingYourPerfectionismSchema = new Schema({
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

export const buildingYourPerfectionism = model(
  "buildingYourPerfectionism",
  buildingYourPerfectionismSchema
);
