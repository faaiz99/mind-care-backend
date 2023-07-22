const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const angerAndFrustrationSchema = new Schema({
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

const angerAndFrustrationModel = mongoose.model(
  "angerAndFrustration",
  angerAndFrustrationSchema
);
module.exports = angerAndFrustrationModel;
