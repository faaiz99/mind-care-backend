import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as commentService from '../services/comment.service.ts'

export const createComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.createComment(req.body)
		res.status(200).json({ status: 'success', message: 'Comment created', data })
	} catch (error) {
		next(error)
	}
}

export const replyComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.replyComment(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Comment Replied', data })

	} catch (error) {
		next(error)
	}
}

export const updateComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.updateComment(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Comment updated', data })
	} catch (error) {
		next(error)
	}
}

export const deleteComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.deleteComment(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Comment updated', data })
	} catch (error) {
		next(error)
	}
}

export const getComments: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.getComments()
		res.status(200).json({ status: 'success', message: 'Comments retrieved', data })

	} catch (error) {
		next(error)
	}
}

export const upvoteComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.upvoteComment(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Comment Upvoted', data })
	} catch (error) {
		next(error)
	}
}

export const downvoteComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.downvoteComment(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Comment Downvoted', data })
	} catch (error) {
		next(error)
	}
}

export const reportComment: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await commentService.reportComment(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Comment reported', data })
	} catch (error) {
		next(error)
	}
	
}