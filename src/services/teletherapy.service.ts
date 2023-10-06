import { Teletherapy } from '../models/theletherapy/teletherapy.model.ts'
import { Message } from '../models/theletherapy/message.model.ts'


/**
 * 
 * ONLY THIS SERVICE IS PENDING REST ARE COMPLETED
 */

export const getClientChats = async (clientId: string) => {
	const response = await Teletherapy.find({
		'members.clientId': clientId
	});
	if(!response)
		throw new Error('Client Chats Could not be Found')
	return response;
}

export const getTherapistChats = async (therapistId: string) => {
	const response = await Teletherapy.find({
		'members.therapistId': therapistId
	});
	if(!response)
		throw new Error('Therapist Chats Could not be Found')

	return response;
}

export const createMessage = async (chatId: string, senderId: string, content: string) => {
	const response = await Message.create({
		chatId, senderId, content
	})
	if(!response)
		throw new Error('Message Could not be Created')

	return response
}

export const getMessages = async (chatId: string) => {
	const response = await Message.find({ _id: chatId })
	if (!response)
		throw new Error('Messages Could not be Found')
	return response
}

// Teletherapy
export const createChat = async (cid: string, tid: string) => {
	const chat = await Teletherapy.findOne({
		$and: [
			{ 'members.clientId': cid },
			{ 'members.therapistId': tid }
		]
	});
	// Return the existing chat if it exists
	if (chat) {
		return chat;
	}

	const newChat = await Teletherapy.create({
		members: [{ clientId: cid, therapistId: tid }]
	});

	return newChat;
}

export const getCurrentChat = async (cid: string, tid: string) => {
	const response = await Teletherapy.findOne({
		$and: [
			{ 'members.clientId': cid },
			{ 'members.therapistId': tid }
		]
	});
	if(!response)
	throw new Error('Current Chat Could not be Found')

	return response;
}
