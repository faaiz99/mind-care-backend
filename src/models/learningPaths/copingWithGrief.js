const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const copingWithGriefSchema = new Schema({
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

const copingWithGriefModel = mongoose.model(
  "copingWithGrief",
  copingWithGriefSchema
);
module.exports = copingWithGriefModel;
