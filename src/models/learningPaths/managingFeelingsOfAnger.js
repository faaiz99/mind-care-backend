const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managingFeelingsOfAngerSchema = new Schema({
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

const managingFeelingsOfAngerModel = mongoose.model(
  "managingFeelingsOfAnger",
  managingFeelingsOfAngerSchema
);
module.exports = managingFeelingsOfAngerModel;
