const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const acceptingWhatCantBeChangedSchema = new Schema({
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

const acceptingWhatCantBeChangedModel = mongoose.model(
  "acceptingWhatCantBeChanged",
  acceptingWhatCantBeChangedSchema
);
module.exports = acceptingWhatCantBeChangedModel;
