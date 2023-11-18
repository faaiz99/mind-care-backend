import { Document, Schema  } from "mongoose";
export interface IPost extends Document {
  clientId?: Schema.Types.ObjectId;
  therapistId?: Schema.Types.ObjectId;
  pictureLink?: string;
  title: string;
  body: string;
  tags: string[];
  comments?: Schema.Types.ObjectId[];
  upvotes?: Schema.Types.ObjectId[];
  downvotes?: Schema.Types.ObjectId[];
  postReport?: Schema.Types.ObjectId[];
  createdAt: Date;
}