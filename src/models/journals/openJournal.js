const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const openJournalSchema = new Schema({
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

const OpenJournalModel = mongoose.model("openJournal", openJournalSchema);
module.exports = OpenJournalModel;
