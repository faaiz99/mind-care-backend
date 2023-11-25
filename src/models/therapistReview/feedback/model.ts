import { Schema, model, Model } from "mongoose";
import { IFeedback } from "../../../types/ITherapistReview.js";

const feedbackSchema = new Schema<IFeedback>({
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

export const FeedbackModel: Model<IFeedback> = model(
  "Feedback",
  feedbackSchema,
);
