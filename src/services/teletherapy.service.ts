import { Teletherapy } from '../models/teletherapy/model.js'
import { Message } from '../models/teletherapy/message/model.js'
// import { IMessage } from '../types/IChat.js';
import { IUserDetails } from '../types/IChat.js';
import { IChatSession } from '../types/IChat.js';
/**
 * 
 * ONLY THIS SERVICE IS PENDING REST ARE COMPLETED
 */
// FRONT - END CHAT HISTORY LEFT SIDE
export const getClientChats = async (id: string) => {
	const response = await Teletherapy.find({
		'members.clientId': id
	}).populate({
		model:'client',
		path:'members.clientId'
	}).populate({
		model:'therapist',
		path:'members.therapistId'
	})
	if (!response)
		throw new Error('Client Chats Could not be Found')
	return response;
}
// FRONT - END CHAT HISTORY LEFT SIDE
export const getTherapistChats = async (therapistId: string) => {
	const response = await Teletherapy.find({
		'members.therapistId': therapistId
	}).populate({
		model:'client',
		path:'members.clientId'
	}).populate({
		model:'therapist',
		path:'members.therapistId'
	})
	if (!response)
		throw new Error('Therapist Chats Could not be Found')

	return response;
}

export const createMessage = async (chatSession: IChatSession) => {
	const existingChat = await Teletherapy.findOne({
		_id: chatSession.sessionId
	})
	if (!existingChat) {
		throw new Error('Chat Cannot Be Found')
	}
	const therapistMessages = chatSession.messages.filter(message => message.senderRole === 'therapist');
	if (therapistMessages.length > 0) {
		try {
			const { sessionId, senderId, senderRole, recipientId, recipientRole } = therapistMessages[0];
			const response = await Message.findOneAndUpdate(
				{ sessionId: sessionId }, // Assuming all messages in chatSession have the same sessionId
				{
					$set: {
						senderId: senderId,
						senderRole: senderRole,
						recipientId: recipientId,
						recipientRole: recipientRole
					},
					$push: {
						content: therapistMessages.map((message) => ({
							text: message.content.text,
							timestamp: message.content.timestamp,
						})),
					},
				},
				{
					upsert: true,
					new: true
				}
			);

			if (!response) {
				throw new Error('Message Could not be Created');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}
	const clientMessages = chatSession.messages.filter(message => message.senderRole === 'client');
	if (clientMessages.length > 0) {
		try {
			const { sessionId, senderId, senderRole, recipientId, recipientRole } = clientMessages[0];
			const response = await Message.findOneAndUpdate(
				{ sessionId: sessionId }, // all messages in chatSession have the same sessionId
				{
					$set: {
						senderId: senderId,
						senderRole: senderRole,
						recipientId: recipientId,
						recipientRole: recipientRole
					},
					$push: {
						content: clientMessages.map((message) => ({
							text: message.content.text,
							timestamp: message.content.timestamp,
						})),
					},
				},
				{
					upsert: true,
					new: true
				}
			);

			if (!response) {
				throw new Error('Message Could not be Created');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	}
}
// FRONT - END OPEN WINDOW
export const getMessages = async (id: string) => {
	const response = await Message.find({ sessionId: id })
	if (!response)
		throw new Error('Messages Could not be Found')
	return response
}

// Teletherapy
export const createChat = async (onlineUsers: Array<IUserDetails>) => {
	const clientUser = onlineUsers.find((user) => user.role === 'client');
	const therapistUser = onlineUsers.find((user) => user.role === 'therapist');

	if (!clientUser || !therapistUser) {
		// No client or therapist found, cannot create a chat session
		// Throw Exception here
		return null;
	}

	const existingChat = await Teletherapy.findOne({
		'members.clientId': clientUser.userId,
		'members.therapistId': therapistUser.userId,
	})
		.populate('members.clientId')
		.populate('members.therapistId')

	if (!existingChat) {
		const newChat = await Teletherapy.create({
			members: [{
				clientId: clientUser.userId,
				therapistId: therapistUser.userId
			}
			],
		})
		// Populate the client and therapist fields
		const populatedChat = await Teletherapy.findOne({ _id: newChat._id })
			.populate('members.clientId')
			.populate('members.therapistId')
			.exec();
		//console.log(populatedChat)
		return populatedChat;
	}
	return existingChat;
};

// FRONT-END ACTIVE CHAT 
export const getCurrentChat = async (cid: string, tid: string) => {
	const response = await Teletherapy.findOne({
		$and: [
			{ 'members.clientId': cid },
			{ 'members.therapistId': tid }
		]
	}).populate({
		model:'client',
		path:'members.clientId'
	}).populate({
		model:'therapist',
		path:'members.therapistId'
	})
	if (!response)
		throw new Error('Current Chat Could not be Found')

	return response;
}
