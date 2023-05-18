const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reflectionJournalSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
  questions: {
    type: Array,
  },
  answers: {
    type: Array,
  },
});

const ReflectionJournalModel = mongoose.model(
  "reflectionJournal",
  reflectionJournalSchema
);
module.exports = ReflectionJournalModel;
