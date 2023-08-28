const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const handlingCriticismModel = mongoose.model(
  "handlingCriticism",
  handlingCriticismSchema
);
module.exports = handlingCriticismModel;
