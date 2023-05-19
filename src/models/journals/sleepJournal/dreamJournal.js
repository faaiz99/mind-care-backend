const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dreamJournalSchema = new Schema({
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
  createdAt:{
		type:Date
	  }
});

const DreamJournal = mongoose.model("dreamJournal", dreamJournalSchema);
module.exports = DreamJournal;
