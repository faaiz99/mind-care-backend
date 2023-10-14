import { Document, Schema } from "mongoose";
export interface IUserDetails {
  socketId: string;
  userId: string;
  role: string;
}

export interface IContent {
  text: string;
  timestamp: string;
}

export interface IMessage extends Document {
  therapistId?: Schema.Types.ObjectId;
  clientId?: Schema.Types.ObjectId;
  sessionId: Schema.Types.ObjectId;
  senderId: string;
  senderRole: string;
  recipientId: string;
  recipientRole: string;
  content: IContent;
}

export interface IChatSession {
  sessionId: string;
  messages: Array<IMessage>;
}
