const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emotionRegulationSchema = new Schema({
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

const emotionRegulationModel = mongoose.model(
  "emotionRegulation",
  emotionRegulationSchema
);
module.exports = emotionRegulationModel;
