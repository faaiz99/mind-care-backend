const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSettingJournalSchema = new Schema({
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

const GoalSettingJournal = mongoose.model(
	"GoalSettingJournal",
	goalSettingJournalSchema
);

module.exports = GoalSettingJournal;