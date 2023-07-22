const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planningthedayAheadSchema = new Schema({
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

const PlanningthedayAhead = mongoose.model("planningthedayAhead", planningthedayAheadSchema);
module.exports = PlanningthedayAhead;
