import { Document, Schema } from "mongoose";
export interface IUserDetails {
	socketId: string;
	userId: string
	role: string;
}

export interface IMessage extends Document {
	therapistId?: Schema.Types.ObjectId,
	clientId?: Schema.Types.ObjectId,
	senderId: string
	senderRole: string;
	text: string;
	timestamp: string;
}
export interface IChatSession {
	sessionId:string,
	messages:Array<IMessage>
}
