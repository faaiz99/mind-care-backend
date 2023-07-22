const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingASelfCarePlanSchema = new Schema({
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

const BuildingASelfCarePlanModel = mongoose.model(
  "buildingASelfCarePlan",
  buildingASelfCarePlanSchema
);
module.exports = BuildingASelfCarePlanModel;
