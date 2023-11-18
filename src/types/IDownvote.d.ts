import { Document, Schema } from "mongoose";
export interface IDownvote extends Document {
  downvoteId: Schema.Types.ObjectId;
  clientId?: Schema.Types.ObjectId;
  therapistId?: Schema.Types.ObjectId;
  postId?: Schema.Types.ObjectId;
  commentId?: Schema.Types.ObjectId;
}
