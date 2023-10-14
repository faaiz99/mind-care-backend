import { Schema, model } from "mongoose";

const howToGetStartedWithCoachingSchema = new Schema({
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

export const howToGetStartedWithCoaching = model(
  "howToGetStartedWithCoaching",
  howToGetStartedWithCoachingSchema,
);
