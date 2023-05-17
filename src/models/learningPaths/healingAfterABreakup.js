const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const healingAfterABreakupSchema = new Schema({
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

const healingAfterABreakupModel = mongoose.model(
  "healingAfterABreakup",
  healingAfterABreakupSchema
);
module.exports = healingAfterABreakupModel;
