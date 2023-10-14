import { Schema, model } from "mongoose";

const cultivatingSelfRespectSchema = new Schema({
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

export const cultivatingSelfRespect = model(
  "cultivatingSelfRespect ",
  cultivatingSelfRespectSchema,
);
