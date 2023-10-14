import { Schema, model, Types } from "mongoose";

const downvoteSchema = new Schema({
  downvoteId: {
    type: Types.ObjectId,
  },
  clientId: {
    type: Types.ObjectId,
    ref: "client",
    required: false,
  },
  therapistId: {
    type: Types.ObjectId,
    ref: "therapist",
    required: false,
  },
  postId: {
    type: Types.ObjectId,
    ref: "post",
    required: false,
  },
  commentId: {
    type: Types.ObjectId,
    ref: "comment",
    required: false,
  },
});

export const Downvote = model("downvote", downvoteSchema);
