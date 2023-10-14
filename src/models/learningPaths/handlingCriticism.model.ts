import { Schema, model } from "mongoose";

const handlingCriticismSchema = new Schema({
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

export const handlingCriticism = model(
  "handlingCriticism",
  handlingCriticismSchema,
);
