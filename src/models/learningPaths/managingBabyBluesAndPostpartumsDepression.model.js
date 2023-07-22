const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managingBabyBluesAndPostpartumsDepressionSchema = new Schema({
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

const managingBabyBluesAndPostpartumsDepressionModel = mongoose.model(
  "managingBabyBluesAndPostpartumsDepression",
  managingBabyBluesAndPostpartumsDepressionSchema
);
module.exports = managingBabyBluesAndPostpartumsDepressionModel;
