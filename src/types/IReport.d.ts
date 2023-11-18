import { Document, Schema } from "mongoose";
export interface IReport extends Document {
  commentId: Schema.Types.ObjectId;
  postId: Schema.Types.ObjectId;
  clientId?: Schema.Types.ObjectId;
  therapistId?: Schema.Types.ObjectId;
  body: string;
  action: string[];
}
