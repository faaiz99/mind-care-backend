const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const envySchema = new Schema({
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

const envyModel = mongoose.model("envy", envySchema);
module.exports = envyModel;
