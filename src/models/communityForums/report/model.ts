import { Schema, model } from "mongoose";
import { IReport } from "../../../types/IReport.js";

const reportSchema = new Schema<IReport>({
  commentId: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: false,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
    required: false,
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
  violation: {
    type: String,
    required: false,
  },
  action: {
    type: String,
    required: false,
  },
});

export const Report = model<IReport>("report", reportSchema);
