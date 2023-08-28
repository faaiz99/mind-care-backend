import {Schema, model} from 'mongoose'


const lowMoodSchema = new Schema({
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

export const lowMoodModel = model("lowMood", lowMoodSchema);
