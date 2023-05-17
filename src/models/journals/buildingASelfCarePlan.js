const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingASelfCarePlanSchema = new Schema({
  questions: {
    type: String,
  },
  answers: {
    type: String,
  },
});

const buildingASelfCarePlanModel = mongoose.model(
  "buildingASelfCarePlan",
  buildingASelfCarePlanSchema
);
module.exports = buildingASelfCarePlanModel;
