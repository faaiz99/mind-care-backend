const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anxietyAndWorrySchema = new Schema({
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

const anxietyAndWorryModel = mongoose.model(
  "anxietyAndWorry",
  anxietyAndWorrySchema
);
module.exports = anxietyAndWorryModel;
