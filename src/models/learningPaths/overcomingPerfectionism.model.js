const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const overcomingPerfectionismSchema = new Schema({
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

const overcomingPerfectionismModel = mongoose.model(
  "overcomingPerfectionism",
  overcomingPerfectionismSchema
);
module.exports = overcomingPerfectionismModel;
