const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const psychologicalProfileSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'client'
  },
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

const psychologicalProfile = mongoose.model("psychologicalProfileSchema", psychologicalProfileSchema);
module.exports = psychologicalProfile;
