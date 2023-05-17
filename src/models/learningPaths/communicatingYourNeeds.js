const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communicatingYourNeedsSchema = new Schema({
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

const communicatingYourNeedsModel = mongoose.model(
  "communicatingYourNeeds",
  communicatingYourNeedsSchema
);
module.exports = communicatingYourNeedsModel;
