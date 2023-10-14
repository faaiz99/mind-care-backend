import { Schema, model } from "mongoose";

const respondingInConflictsSchema = new Schema({
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

export const respondingInConflictsModel = model(
  "respondingInConflicts",
  respondingInConflictsSchema,
);
