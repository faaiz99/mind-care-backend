import { Teletherapy } from '../models/theletherapy/teletherapy.model.ts'
import { Message } from '../models/theletherapy/message.model.ts'


// Messages 

export const getClientChats = async (clientId: string) => {
	const chats = await Teletherapy.find({
		'members.clientId': clientId
	});

	return chats;
}

export const getTherapistChats = async (therapistId: string) => {
	const chats = await Teletherapy.find({
		'members.therapistId': therapistId
	});

	return chats;
}

export const createMessage = async (chatId: string, senderId: string, content: string) => {
	const message = await Message.create({
		chatId, senderId, content
	})

	return message
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

	if (chat) {
		// Return the existing chat if it exists
		return chat;
	}

	const newChat = await Teletherapy.create({
		members: [{ clientId: cid, therapistId: tid }]
	});

	return newChat;
}

/**
 * @Deprecated
 * Will be removed once Chat/Message API is working
 */

export const getUserChats = async (id: string) => {
	const chats = await Teletherapy.find({
		members: { $in: [id] }
	})

	return chats
}

export const getCurrentChat = async (cid: string, tid: string) => {
	const chat = await Teletherapy.findOne({
		$and: [
			{ 'members.clientId': cid },
			{ 'members.therapistId': tid }
		]
	});

	return chat;
}

/* 
export const createChat = async (cid:string, tid:string)=>{

	// cid -> clientId 
	// tid -> TherapistId
	const oldChat = await Chat.exists({
		therapistId:tid,
		clientId:cid
	})
	if(oldChat){
		return oldChat
	}

	const newChat = await Chat.create({
		clientId:cid,
		therapistId:tid
	})

	const response = newChat.save()

	if(!response)
		throw new Error('Chat could not be send')
	return response

}

export const getUserChats = async (id:string)=>{
	const response = await Chat.find({_id:id})
	if(!response)
		throw new Error('Chats could not be fetched')
	return response

}

export const getCurrentChat = async ()=>{
	const response = await Chat.findOne()
	if(!response)
		throw new Error('Chat not found')
	return response

}

*/