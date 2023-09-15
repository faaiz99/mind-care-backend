import { Request, Response, RequestHandler, NextFunction } from 'express'
import * as teletherapyService from '../services/teletherapy.service.ts'


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


export const sendMessage: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await teletherapyService.createChat()
		res.status(200).json({ status: 'success', message: 'message sent successfully', data })
	} catch (error) {
		next(error)
	}
}

export const getUserChat: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await teletherapyService.getUserChat()
		res.status(200).json({ status: 'success', message: 'message sent successfully', data })
	} catch (error) {
		next(error)
	}
}

export const getCurrentChat: RequestHandler = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
	try {
		const data = await teletherapyService.getCurrentChat()
		res.status(200).json({ status: 'success', message: 'message sent successfully', data })
	} catch (error) {
		next(error)
	}
}