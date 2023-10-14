import { Schema, model } from "mongoose";

const anxietyAndWorrySchema = new Schema({
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

export const anxietyAndWorryModel = model(
  "anxietyAndWorry",
  anxietyAndWorrySchema,
);
