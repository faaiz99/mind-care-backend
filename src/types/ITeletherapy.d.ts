import { Schema, Document } from "mongoose";

export interface IUserDetails {
  socketId: string;
  userId: string;
  role: string;
}

export interface IMessage extends Document {
  message: string;
  senderRole: string;
  senderId: Schema.Types.ObjectId;
  receiverId: Schema.Types.ObjectId;
  receiverRole: string;
  timeStamp: string;
}

export interface ITeletherapy extends Document {
  senderId: Schema.Types.ObjectId;
  role: string;
  receiverId: Schema.Types.ObjectId;
  chat: IMessage[];
}
