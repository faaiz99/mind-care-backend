import { Request, Response, NextFunction, RequestHandler} from 'express'
import { Comment } from '../../models/communityForums/comment.model.ts'
import { Upvote } from '../../models/communityForums/upvote.model.ts'
import { Downvote } from '../../models/communityForums/downvote.model.ts'
import { Report } from '../../models/communityForums/report.model.ts'
import { Post } from '../../models/communityForums/post.model.ts'
import { uuid } from 'uuidv4';

export const createComment:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
	const comment = req.body;
	comment.commentId = uuid()
	let result
	try {
		result = await Comment.create(Post)
	} catch (error) {
		//res.json({ status: 400, message: 'Comment could not be created', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment created', data: result })
	}
	next()

}

export const replyComment:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
	let comment = req.body
	comment.commentId = uuid()
	let result;
	try {
		comment = await Comment.create(req.body)
		result = await Post.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { comments: comment }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Comment Replied Failed', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || comment != null || comment != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment Replied', data: result })
	}
	next()

}

export const updateComment:RequestHandler  = async (req:Request, res:Response, next:NextFunction) => {
	const comment = req.body;
	let result;
	try {
		result = await comment.findOneAndUpdate({ commentId: req.params.id, comment })
	} catch (error) {
		//res.json({ status: 400, message: 'Comment could not be updated', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment updated', data: result })
	}
	next()
}

export const deleteComment:RequestHandler  = async (req:Request, res:Response, next:NextFunction) => {
	// Delete Comment or Not ?/
	const comment = req.body;
	comment.body = 'Comment Deleted'
	let result;
	try {
		result = await comment.findOneAndUpdate({ commentId: req.params.id, comment })
	} catch (error) {
		//res.json({ status: 400, message: 'Comment could not be updated', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment updated', data: result })
	}
	next()
}

export const getComments:RequestHandler  = async (req:Request, res:Response, next:NextFunction) => {
	let result;
	try {
		result = await Comment.find()
	} catch (error) {
		//res.json({ status: 400, message: 'Comments could not be retrieved', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.status(200).json({ status: 'success', message: 'Comments retrieved', data: result })
	}
	next()

}

export const upvoteComment:RequestHandler  = async (req:Request, res:Response, next:NextFunction) => {
	let upvote;
	let result;

	try {
		upvote = await Upvote.create(req.body)
		result = await Comment.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { upvotes: upvote }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Comment could not be upvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || upvote != null || upvote != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment upvoted', data: result })
	}
	next()
}

export const downvoteComment:RequestHandler  = async (req:Request, res:Response, next:NextFunction) => {
	let downvote
	let result;
	try {
		downvote = await Downvote.create(req.body)
		result = await Comment.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { downvotes: downvote }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Comment could not be downvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || downvote != null || downvote != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment downvoted', data: result })
	}
	next()
}

export const reportComment:RequestHandler  = async (req:Request, res:Response, next:NextFunction) => {
	let report;
	let result;
	
	try {
		report = await Report.create(req.body)
		result = await Comment.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { postReport: report }
		})
	} catch (error) {
		//res.json({ status: 400, message: 'Comment could not be reported', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || report != null || report != undefined) {
		res.status(200).json({ status: 'success', message: 'Comment reported', data: result })
	}
	next()
}