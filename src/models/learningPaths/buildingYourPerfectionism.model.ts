const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingYourPerfectionismSchema = new Schema({
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

const buildingYourPerfectionismModel = mongoose.model(
  "buildingYourPerfectionism",
  buildingYourPerfectionismSchema
);
module.exports = buildingYourPerfectionismModel;
