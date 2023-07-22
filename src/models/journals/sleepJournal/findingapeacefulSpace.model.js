const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findingpeacefulSpaceSchema = new Schema({
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

const FindingpeacefulSpace = mongoose.model("findingpeacefulSpace", findingpeacefulSpaceSchema);
module.exports = FindingpeacefulSpace;
