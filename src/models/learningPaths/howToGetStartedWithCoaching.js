const mongoose = require("mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const howToGetStartedWithCoachingSchema = new Schema({
  questions: {
    type: String,
  },
  results: {
    type: String,
  },
  content: {
    type: String,
  },
  audio: {
    type: String,
  },
});

const howToGetStartedWithCoachingModel = mongoose.model(
  "howToGetStartedWithCoaching",
  howToGetStartedWithCoachingSchema
);
module.exports = howToGetStartedWithCoachingModel;
