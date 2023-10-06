import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as teletherapyService from '../services/teletherapy.service.ts'
import { handleError } from '../middlewares/error.middlewar.ts'

export const getClientChats: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	// id -> Clientid
	try {
		const data = await teletherapyService.getClientChats(req.params.id)
		res.status(200).json({ status: 'success', message: 'Client Chats Found', data })
	} catch (error) {
		handleError(error, res, next);
	}
}

export const getTherapistChats: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	// id -> therapistid
	try {
		const data = await teletherapyService.getTherapistChats(req.params.id)
		res.status(200).json({ status: 'success', message: 'Therapist Chats Found', data })
	} catch (error) {
		handleError(error, res, next);
	}
}

export const createMessage: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	try {
		const data = await teletherapyService.createMessage(req.body.chatId, req.body.senderId, req.body.content)
		res.status(200).json({ status: 'success', message: 'Message Sent', data })
	} catch (error) {
		handleError(error, res, next);
	}
}

export const getMessages: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await teletherapyService.getMessages(req.params.id)
		res.status(200).json({ status: 'success', message: 'Messages Found', data })

	} catch (error) {
		handleError(error, res, next);
	}
}


// import { Server } from 'socket.io'
// import { socketOptionsCors } from '../config/socket.config.ts'
// import { httpServer } from '../../app.ts';

// const io = new Server(httpServer, socketOptionsCors);

// io.on("connection", (socket) => {
// 	socket.emit("me", socket.id)

// 	socket.on("disconnect", () => {
// 		socket.broadcast.emit("callEnded")
// 	})

// 	socket.on("callUser", (data) => {
// 		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
// 	})

// 	socket.on("answerCall", (data) => {
// 		io.to(data.to).emit("callAccepted", data.signal)
// 	})
// })

export const createChat: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	// cid -> client Id
	// tid -> therapist Id
	try {
		const data = await teletherapyService.createChat(req.body.clientId, req.body.therapistId)
		res.status(200).json({ status: 'success', message: 'Chat Created', data })
	} catch (error) {
		handleError(error, res, next);
	}
}


export const getCurrentChat: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	// Fetch the current Chat for both the users
	try {
		const data = await teletherapyService.getCurrentChat(req.params.cid, req.params.tid)
		res.status(200).json({ status: 'success', message: 'Current Chat Found', data })
	} catch (error) {
		handleError(error, res, next);
	}
}

