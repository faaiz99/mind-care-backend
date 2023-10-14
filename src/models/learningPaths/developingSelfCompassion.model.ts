import { Schema, model } from "mongoose";

const developingSelfCompassionSchema = new Schema({
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

export const developingSelfCompassion = model(
  "developingSelfCompassion",
  developingSelfCompassionSchema,
);
