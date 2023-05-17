const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const respondingInConflictsSchema = new Schema({
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

const respondingInConflictsModel = mongoose.model(
  "respondingInConflicts",
  respondingInConflictsSchema
);
module.exports = respondingInConflictsModel;
