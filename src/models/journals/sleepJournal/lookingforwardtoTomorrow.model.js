const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lookingforwardtoTomorrowSchema = new Schema({
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

const LookingforwardtoTomorrow = mongoose.model("lookingforwardtoTomorrow", lookingforwardtoTomorrowSchema);
module.exports = LookingforwardtoTomorrow;
