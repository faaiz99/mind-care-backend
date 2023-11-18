import { Schema, model } from "mongoose";
import { IDownvote } from "../../../types/IDownvote.js";

const downvoteSchema = new Schema<IDownvote>({
  downvoteId: {
    type: Schema.Types.ObjectId,
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
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
    required: false,
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: false,
  },
});

export const Downvote = model<IDownvote>("downvote", downvoteSchema);
