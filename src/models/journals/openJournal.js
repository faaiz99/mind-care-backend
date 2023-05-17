const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const openJournalSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
});

const openJournalModel = mongoose.model("openJournal", openJournalSchema);
module.exports = openJournalModel;
