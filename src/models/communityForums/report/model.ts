import { Schema, model } from "mongoose";
import { IReport } from "../../../types/IReport.js";

const reportSchema = new Schema<IReport>({
  commentId: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: true,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
    required: true,
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
    required: false,
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: "therapist",
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  action: [
    {
      type: String,
    },
  ],
});

export const Report = model<IReport>("report", reportSchema);