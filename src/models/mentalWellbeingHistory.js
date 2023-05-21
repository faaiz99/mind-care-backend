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
  depressionScore: {
    type: String,
    required: true,
  },
  anxietyScore: {
    type: String,
    required: true,
  },
  depressionTestTime: {
    type: Date,
    required: true,
  },
  anxietyTestTime: {
    type: Date,
    required: true,
  },
  depressionTestEnabled: {
    type: Boolean,
    required: true,
  },
  anxietyTestEnabled: {
    type: Boolean,
    required: true,
  },
  stressTimeline: {
    type: String,
    required: true,
  },
});

const MentalWellBeingHistory = mongoose.model("mentalWellbeingHistorySchema", mentalWellbeingHistorySchema);
module.exports = MentalWellBeingHistory;
