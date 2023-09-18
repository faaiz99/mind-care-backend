import { Request, Response, NextFunction, RequestHandler } from 'express'
import * as postService from '../services/post.service.ts'

export const createPost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	// postId -> generate at creation
	// clientId | therapist Id(one Must)
	// pictureLink Optional
	// Title
	// Body
	// tags

	try {
		const data = await postService.createPost(req.body)
		res.status(200).json({ status: 'success', message: 'Post created', data })

	} catch (error) {
		next(error)
	}
}

export const updatePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.updatePost(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Post updated', data })
	} catch (error) {
		next(error)
	}
}

export const deletePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.deletePost(req.params.id)
		res.status(200).json({ status: 'success', message: 'Post deleted', data })
	} catch (error) {
		next(error)
	}
}

export const getPosts: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	try {
		const data = await postService.getPosts()
		res.status(200).json({ status: 'success', message: 'Post retrieved', data })
	} catch (error) {
		next(error)
	}
}

export const getPost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.getPost(req.params.id)
		res.status(200).json({ status: 'success', message: 'Post found', data })
	} catch (error) {
		next(error)
	}
}

export const upvotePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.upvotePost(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Post upvoted', data })
	} catch (error) {
		next(error)
	}
}

export const removeUpvotePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.removeUpvotePost(req.params.did, req.params.pid)
		res.status(200).json({status:'success', message:'Upvote Removed', data})
	} catch (error) {
		next(error)
	}
}

export const removeDownvotePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.removeDownvotePost(req.params.uid, req.params.pid)
		res.status(200).json({status:'success', message:'Downvote Removed', data})
	} catch (error) {
		next(error)
	}
}

export const downvotePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.downvotePost(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Post downvoted', data })
	} catch (error) {
		next(error)
	}
}

export const reportPost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const data = await postService.reportPost(req.body, req.params.id)
		res.status(200).json({ status: 'success', message: 'Post reported', data })
	} catch (error) {
		next(error)
	}
}