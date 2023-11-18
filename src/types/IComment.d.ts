import { Document, Schema } from "mongoose";

export interface IComment extends Document {
  postId?: Schema.Types.ObjectId;
  therapistId?: Schema.Types.ObjectId;
  clientId?: Schema.Types.ObjectId;
  parentId?: Schema.Types.ObjectId;
  body: string;
  replies: Schema.Types.ObjectId[];
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  commentReport: Schema.Types.ObjectId[];
  createdAt: Date;
}
