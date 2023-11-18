import { Schema, model } from "mongoose";
import { IPost } from "../../../types/IPost.js";

const postSchema = new Schema<IPost>({
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
  pictureLink: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  comments: [
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
  postReport: [
    {
      type: Schema.Types.ObjectId,
      ref: "report",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Post = model<IPost>("post", postSchema);