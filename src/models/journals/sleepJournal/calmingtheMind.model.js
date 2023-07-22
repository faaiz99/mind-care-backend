const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calmingtheMindSchema = new Schema({
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

const CalmingtheMind = mongoose.model("calmingtheMind", calmingtheMindSchema);
module.exports = CalmingtheMind;
