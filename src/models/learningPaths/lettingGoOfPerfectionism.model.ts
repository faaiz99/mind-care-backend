const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lettingGoOfPerfectionismSchema = new Schema({
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

const lettingGoOfPerfectionismModel = mongoose.model(
  "lettingGoOfPerfectionismMoney",
  lettingGoOfPerfectionismSchema
);
module.exports = lettingGoOfPerfectionismModel;
