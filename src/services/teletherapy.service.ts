import { Chat } from '../models/theletherapy/teletherapy.model.ts'
import { Server } from 'socket.io'
import { socketOptionsCors } from '../config/socket.config.ts'
import { httpServer } from '../../app.ts';

const io = new Server(httpServer, socketOptionsCors);

io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})

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

export const getUserChat = async (id:string)=>{
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