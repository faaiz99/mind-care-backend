import { Post } from '../../models/communityForums/post.model.js'
import { Upvote } from '../../models/communityForums/upvote.model.js'
import { Downvote } from '../../models/communityForums/downvote.model.js'
import { Report } from '../../models/communityForums/report.model.js'
import { uuid } from 'uuidv4';

export const createPost = async (req, res, next) => {

	/*
		postId -> generate at creation
		clientId | therapist Id (one Must)
		pictureLink Optional
		Title
		Body
		tags
	*/
	var post = req.body;
	post.postId = uuid()
	var result;

	try {
		result = await Post.create(post)
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be created', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Post created', data: result })
	}
	next()
}

export const updatePost = async (req, res, next) => {
	var post = req.body;
	var result;
	try {
		result = await Post.findOneAndUpdate({ postId: req.params.id, post })
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be updated', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Post updated', data: result })
	}
	next()
}

export const deletePost = async (req, res, next) => {
	var result;
	try {
		result = await Post.findOneAndDelete({ postId: req.params.id })
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be deleted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Post deleted', data: result })
	}
	next()

}

export const getPosts = async (req, res, next) => {
	var result;
	try {
		result = await Post.find()
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be retrieved', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Post retrieved', data: result })
	}
	next()

}

export const getPost = async (req, res, next) => {
	var result;
	try {
		result = await Post.findOne({ postId: req.params.id })
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be found', error: error.message })
		next(error)
	}
	if (result != null || result != undefined) {
		res.json({ status: 200, message: 'Post found', data: result })
	}
	next()

}

export const upvotePost = async (req, res, next) => {

	var upvote;
	var result;

	try {
		upvote = await Upvote.create(req.body)
		result = await Post.findOneAndUpdate({ postId: req.params.id }, {
			$push: { upvotes: upvote }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be upvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || upvote != null || upvote != undefined) {
		res.json({ status: 200, message: 'Post upvoted', data: result })
	}
	next()

}

export const downvotePost = async (req, res, next) => {
	var downvote
	var result;
	try {
		downvote = await Downvote.create(req.body)
		result = await Post.findOneAndUpdate({ postId: req.params.id }, {
			$push: { downvotes: downvote }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be downvoted', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || downvote != null || downvote != undefined) {
		res.json({ status: 200, message: 'Post downvoted', data: result })
	}
	next()
}

export const reportPost = async (req, res, next) => {
	var report;
	var result;
	try {
		report = await Report.create(req.body)
		result = await Post.findOneAndUpdate({ postId: req.params.id }, {
			$push: { postReport: report }
		})
	} catch (error) {
		res.json({ status: 400, message: 'Post could not be reported', error: error.message })
		next(error)
	}
	if (result != null || result != undefined || report != null || report != undefined) {
		res.json({ status: 200, message: 'Post reported', data: result })
	}
	next()

}