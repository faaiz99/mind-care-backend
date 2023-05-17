const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developingHealthyCopingMechanismSchema = new Schema({
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

const developingHealthyCopingMechanismModel = mongoose.model(
  "developingHealthyCopingMechanism",
  developingHealthyCopingMechanismSchema
);
module.exports = developingHealthyCopingMechanismModel;
