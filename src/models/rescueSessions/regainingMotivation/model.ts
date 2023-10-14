import { Schema, model, Model } from "mongoose";
import { IRescueSession } from "../../../types/IRescueSession.js";

const regainingMotivationSchema = new Schema<IRescueSession>({
  clientId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  questions: [
    {
      type: String,
      required: true,
    },
  ],
  results: [
    {
      type: String,
      required: true,
    },
  ],
  listened: {
    type: Boolean,
    required: true,
  },
});

export const RegainingMotivation: Model<IRescueSession> = model<IRescueSession>(
  "regainingMotivation",
  regainingMotivationSchema,
);
