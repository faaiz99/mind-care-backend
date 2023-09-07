import { Request, Response, NextFunction, RequestHandler } from 'express'
import { Post } from '../models/communityForums/post.model.ts'
import { Upvote } from '../models/communityForums/upvote.model.ts'
import { Downvote } from '../models/communityForums/downvote.model.ts'
import { Report } from '../models/communityForums/report.model.ts'
import { uuid } from 'uuidv4';

export const createPost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	/*
		postId -> generate at creation
		clientId | therapist Id (one Must)
		pictureLink Optional
		Title
		Body
		tags
	*/
	const post = req.body;
	post.postId = uuid()
	let result;

	try {
		result = await Post.create(post)
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be created', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Post created', data: result })
	}
	next()
}

export const updatePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	const post = req.body;
	let result;
	try {
		result = await Post.findOneAndUpdate({ postId: req.params.id, post })
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be updated', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Post updated', data: result })
	}
	next()
}

export const deletePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	let result;
	try {
		result = await Post.findOneAndDelete({ postId: req.params.id })
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be deleted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Post deleted', data: result })
	}
	next()

}

export const getPosts: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	let result;
	try {
		result = await Post.find()
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be retrieved', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Post retrieved', data: result })
	}
	next()

}

export const getPost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	let result;
	try {
		result = await Post.findOne({ postId: req.params.id })
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be found', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Post found', data: result })
	}
	next()

}

export const upvotePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

	let upvote;
	let result;

	try {
		upvote = await Upvote.create(req.body)
		result = await Post.findOneAndUpdate({ postId: req.params.id }, {
			$push: { upvotes: upvote }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be upvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || upvote != null || upvote != undefined) {
		res.status(200).json({ status: 'success', message: 'Post upvoted', data: result })
	}
	next()

}

export const downvotePost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	let downvote
	let result;
	try {
		downvote = await Downvote.create(req.body)
		result = await Post.findOneAndUpdate({ postId: req.params.id }, {
			$push: { downvotes: downvote }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be downvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || downvote != null || downvote != undefined) {
		res.status(200).json({ status: 'success', message: 'Post downvoted', data: result })
	}
	next()
}

export const reportPost: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	let report;
	let result;
	try {
		report = await Report.create(req.body)
		result = await Post.findOneAndUpdate({ postId: req.params.id }, {
			$push: { postReport: report }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Post could not be reported', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || report != null || report != undefined) {
		res.status(200).json({ status: 'success', message: 'Post reported', data: result })
	}
	next()

}