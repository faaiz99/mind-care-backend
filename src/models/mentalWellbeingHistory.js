const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mentalWellbeingHistorySchema = new Schema({
  checkinDate: {
    type: Date,
  },
  emotion: {
    type: String,
    required: true,
  },
  specificEmotion: {
    type: String,
    required: true,
  },
  reasonOfEmotion: {
    type: String,
    required: true,
  },
  elaborationText: {
    type: String,
    required: true,
  },
  stressTimeline: {
    type: String,
    required: true,
  },
  depressionScore: {
    type: String,
    required: false,
  },
  anxietyScore: {
    type: String,
    required: false,
  },
  depressionTestTime: {
    type: Date,
    required: false,
  },
  anxietyTestTime: {
    type: Date,
    required: false,
  },
  depressionTestEnabled: {
    type: Boolean,
    required: false,
  },
  anxietyTestEnabled: {
    type: Boolean,
    required: false,
  },
 
});

const MentalWellBeingHistory = mongoose.model("mentalWellbeingHistorySchema", mentalWellbeingHistorySchema);
module.exports = MentalWellBeingHistory;
