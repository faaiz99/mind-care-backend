import mongoose from "mongoose";
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  clientName: {
    type: String,
    required: true,
  },
  feedbackBackBody: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
});

const feedbackModel = mongoose.model("feedback", feedbackSchema);
module.exports = feedbackModel;
