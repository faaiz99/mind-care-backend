import { Schema, model } from "mongoose";
import { IUpvote } from "../../../types/IUpvote.js";

const upvoteSchema = new Schema<IUpvote>({
  upvoteId: {
    type: Schema.Types.ObjectId,
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: "therapist",
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: "comment",
  },
});

export const Upvote = model<IUpvote>("upvote", upvoteSchema);
