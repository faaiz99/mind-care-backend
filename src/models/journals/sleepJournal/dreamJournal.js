const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamJournalSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
  date:{
    type:Date
  }
});

const dreamJournal = mongoose.model("dreamJournal", dreamJournalSchema);
module.exports = dreamJournal;
