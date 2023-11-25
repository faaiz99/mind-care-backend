import { Schema, model, Model } from "mongoose";
import { ITherapistRemark } from "../../../types/ITherapist.js";

const therapistRemarksSchema = new Schema<ITherapistRemark>({
  createdAt: {
    type: Date,
  },
  body: {
    type: String,
  },
  therapist: {
    type: Schema.Types.ObjectId,
    ref: "therapist",
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: "client",
  },
});

export const TherapistRemarks: Model<ITherapistRemark> = model(
  "TherapistRemarks",
  therapistRemarksSchema,
);
