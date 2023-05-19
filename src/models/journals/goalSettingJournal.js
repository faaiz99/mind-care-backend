const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSettingJournalSchema = new Schema({
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

const GoalSettingJournal = mongoose.model(
	"GoalSettingJournal",
	goalSettingJournalSchema
);

module.exports = GoalSettingJournal;