const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cultivatingSelfRespectSchema = new Schema({
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

const cultivatingSelfRespectModel = mongoose.model(
  "cultivatingSelfRespect ",
  cultivatingSelfRespect
);
module.exports = cultivatingSelfRespectModel;
