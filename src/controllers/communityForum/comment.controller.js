import { Comment } from '../../models/communityForums/comment.model.js'
import { Upvote } from '../../models/communityForums/upvote.model.js'
import { Downvote } from '../../models/communityForums/downvote.model.js'
import { Report } from '../../models/communityForums/report.model.js'
import { uuid } from 'uuidv4';
export const createComment = async (req, res, next) => {
	var comment = req.body;
	comment.commentId = uuid()
	var result
	try {
		result = await Comment.create(post)
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be created', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Post created', data: result })
	}
	next()

}

export const replyComment = async (req, res, next) => {

}

export const updateComment = (req, res, next) => {

}

export const deleteComment = (req, res, next) => {

}

export const getComments = (req, res, next) => {

}

export const upvoteComment = (req, res, next) => {

}

export const downvoteComment = (req, res, next) => {

}

export const reportComment = (req, res, next) => {

}