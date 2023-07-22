const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const openJournalSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
  questions: {
		type: [String],
	  },
	  answers: {
		type: [String],
	  },
  createdAt:{
		type:Date
	  }
});

const OpenJournalModel = mongoose.model("openJournal", openJournalSchema);
module.exports = OpenJournalModel;
