import { Chat } from '../models/chat/chat.model.ts'

export const createChat = async ()=>{

	const response = await Chat.create()
	if(!response)
		throw new Error('Chat could not be send')
	return response

}

export const getUserChat = async ()=>{
	const response = await Chat.find({})
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