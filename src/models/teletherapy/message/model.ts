import { Schema, model, Model } from 'mongoose'
import { IMessage } from '../../../types/IChat.js';

const messageSchema = new Schema<IMessage>({
	therapistId:{
		type:Schema.Types.ObjectId,
		ref:'therapist',
		required:false
	},
	clientId:{
		type:Schema.Types.ObjectId,
		ref:'client',
		required:false
	},
	senderId: { 
		type: String,
		required: true 
	},
	senderRole: { 
		type: String, 
		required: true 
	},
	text: { 
		type: String, 
		required: true 
	},
	timestamp: { 
		type: String, 
		required: true 
	},
}
);

export const Message: Model<IMessage> = model<IMessage>("Message", messageSchema);
