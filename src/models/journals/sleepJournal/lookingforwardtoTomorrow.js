const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lookingforwardtoTomorrowSchema = new Schema({
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

const LookingforwardtoTomorrow = mongoose.model("lookingforwardtoTomorrow", lookingforwardtoTomorrowSchema);
module.exports = LookingforwardtoTomorrow;
