const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSolvingJournalSchema = new Schema({
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
})

const ProblemSolvingJournal = mongoose.model(
	"problemSolvingJournal",
	problemSolvingJournalSchema
);

module.exports = ProblemSolvingJournal;