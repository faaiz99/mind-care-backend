const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const relationshipSchema = new Schema({
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

const relationshipModel = mongoose.model("relationship", relationshipSchema);
module.exports = relationshipModel;
