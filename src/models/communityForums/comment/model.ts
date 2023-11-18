import { Schema, model } from "mongoose";
import { IComment } from "../../../types/IComment.js";

const commentSchema = new Schema<IComment>({
  postId: {
    type: Schema.Types.ObjectId,
    ref: "post",
    required: false,
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: "therapist",
    required: false,
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "client",
    required: false,
  },
  parentId: {
    type: Schema.Types.ObjectId,
    ref: "comment",
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "comment",
      required: false,
    },
  ],
  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "upvote",
      required: false,
    },
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: "downvote",
      required: false,
    },
  ],
  commentReport: [
    {
      type: Schema.Types.ObjectId,
      ref: "report",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Comment = model<IComment>("comment", commentSchema);
