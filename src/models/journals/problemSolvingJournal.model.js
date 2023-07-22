const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSolvingJournalSchema = new Schema({
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
})

const ProblemSolvingJournal = mongoose.model(
	"problemSolvingJournal",
	problemSolvingJournalSchema
);

module.exports = ProblemSolvingJournal;