const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regainingMotivationSchema = new Schema({
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

const regainingMotivationModel = mongoose.model(
  "regainingMotivation",
  regainingMotivationSchema
);
module.exports = regainingMotivationModel;
