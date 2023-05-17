const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developingSelfCompassionSchema = new Schema({
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

const developingSelfCompassionModel = mongoose.model(
  "developingSelfCompassion",
  developingSelfCompassionSchema
);
module.exports = developingSelfCompassionModel;
