import { Comment } from '../../models/communityForums/comment.model.js'
import { Upvote } from '../../models/communityForums/upvote.model.js'
import { Downvote } from '../../models/communityForums/downvote.model.js'
import { Report } from '../../models/communityForums/report.model.js'
import { Post } from '../../models/communityForums/post.model.js'
import { uuid } from 'uuidv4';

export const createComment = async (req, res, next) => {
	var comment = req.body;
	comment.commentId = uuid()
	var result
	try {
		result = await Comment.create(post)
	} catch (error) {
		res.json({ status: 400, message: 'Comment could not be created', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Comment created', data: result })
	}
	next()

}

export const replyComment = async (req, res, next) => {
	var comment = req.body
	comment.commentId = uuid()
	var result;
	try {
		comment = await Comment.create(req.body)
		result = await Post.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { comments: comment }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Comment Replied Failed', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || comment != null || comment != undefined) {
		res.json({ status: 200, message: 'Comment Replied', data: result })
	}
	next()

}

export const updateComment = async (req, res, next) => {
	var comment = req.body;
	var result;
	try {
		result = await comment.findOneAndUpdate({ commentId: req.params.id, comment })
	} catch (error) {
		res.json({ status: 400, message: 'Comment could not be updated', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Comment updated', data: result })
	}
	next()
}

export const deleteComment = async (req, res, next) => {
	// Delete Comment or Not ?/
	var comment = req.body;
	comment.body = 'Comment Deleted'
	var result;
	try {
		result = await comment.findOneAndUpdate({ commentId: req.params.id, comment })
	} catch (error) {
		res.json({ status: 400, message: 'Comment could not be updated', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Comment updated', data: result })
	}
	next()
}

export const getComments = async (req, res, next) => {
	var result;
	try {
		result = await Comment.find()
	} catch (error) {
		res.json({ status: 400, message: 'Comments could not be retrieved', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Comments retrieved', data: result })
	}
	next()

}

export const upvoteComment = async (req, res, next) => {
	var upvote;
	var result;

	try {
		upvote = await Upvote.create(req.body)
		result = await Comment.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { upvotes: upvote }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Comment could not be upvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || upvote != null || upvote != undefined) {
		res.json({ status: 200, message: 'Comment upvoted', data: result })
	}
	next()
}

export const downvoteComment = async (req, res, next) => {
	var downvote
	var result;
	try {
		downvote = await Downvote.create(req.body)
		result = await Comment.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { downvotes: downvote }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Comment could not be downvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || downvote != null || downvote != undefined) {
		res.json({ status: 200, message: 'Comment downvoted', data: result })
	}
	next()
}

export const reportComment = async (req, res, next) => {
	var report;
	var result;
	try {
		report = await Report.create(req.body)
		result = await Comment.findOneAndUpdate({ commentId: req.params.id }, {
			$push: { postReport: report }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Comment could not be reported', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || report != null || report != undefined) {
		res.json({ status: 200, message: 'Comment reported', data: result })
	}
	next()
}