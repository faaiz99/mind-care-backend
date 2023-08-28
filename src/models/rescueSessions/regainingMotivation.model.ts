import { Schema, model } from "mongoose";

const regainingMotivationSchema = new Schema({
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

export const regainingMotivationModel = model(
  "regainingMotivation",
  regainingMotivationSchema
);
