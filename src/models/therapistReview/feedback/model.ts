import {Schema, model} from 'mongoose'


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

export const feedbackModel = model("feedback", feedbackSchema);

