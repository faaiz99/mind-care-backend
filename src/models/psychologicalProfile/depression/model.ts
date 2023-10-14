import { Schema, model, Model } from "mongoose";
import { IBeckDepression } from "../../../types/IDepression.js";
const BeckDepressionSchema = new Schema<IBeckDepression>({
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
    required: true,
  },
  responses: [
    {
      questionNumber: {
        type: Number,
        required: true,
      },
      response: {
        type: Number,
        enum: [0, 1, 2, 3],
        required: true,
      },
    },
  ],
  score: {
    type: Number,
    required: true,
  },
});

export const beckDepression: Model<IBeckDepression> = model<IBeckDepression>(
  "beckDepression",
  BeckDepressionSchema,
);
