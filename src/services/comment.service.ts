/* eslint-disable @typescript-eslint/no-explicit-any */
import { Comment } from '../models/communityForums/comment/model.ts'
import { Upvote } from '../models/communityForums/upvote/model.ts'
import { Downvote } from '../models/communityForums/downvote/model.ts'
import { Report } from '../models/communityForums/report/model.ts'
import { Post } from '../models/communityForums/post/model.ts'

export const createComment = async (id: string, comment: any) => {
	const responseDB = await Comment.create(comment)
	const response = await Post.findOneAndUpdate({ _id: id }, {
		$push: { comments: responseDB }
	})
	if (!response && !responseDB)
		throw new Error('Comment Could not be Created', responseDB)
	return response
}

export const replyComment = async (comment: any, id: string) => {
	const responseDB = await Comment.create(comment)
	const response = await Comment.findOneAndUpdate({ _id: id }, {
		$push: { replies: responseDB }
	}, {
		upsert:true,
		returnOriginal:false
	}).populate({
		model:'comment',
		path:'replies'
	})
	if (!response && !responseDB)
		throw new Error('Reply Could not be Created')
	return response
}

export const updateComment = async (comment: any, id: string) => {
	const response = await Comment.findOneAndUpdate({ _id: id }, comment)
	if (!response)
		throw new Error('Comment Updated')
	return response
}

export const deleteComment = async (comment: any, id: string) => {
	comment.body = 'Comment Deleted'
	const response = await Comment.findOneAndUpdate({ _id: id }, comment)
	if (!response)
		throw new Error('Comment Deleted')
	return response

}

export const getComments = async (id:string) => {
	const response = await Comment.find({postId:id}).populate({
		model:'comment',
		path:'replies'
	})
	if (!response)
		throw new Error('Comments Could not be Retrieved')
	return response
}

export const upvoteComment = async (comment: any, id: string) => {
	const upvote = await Upvote.create(comment)
	const response = await Comment.findOneAndUpdate({ _id: id }, {
		$push: { upvotes: upvote }
	})
	if (!response)
		throw new Error('Comment Could not be Upvoted')
	return response
}

export const downvoteComment = async (comment: any, id: string) => {
	const downvote = await Downvote.create(comment)
	const response = await Comment.findOneAndUpdate({ _id: id }, {
		$push: { downvotes: downvote }
	})
	if (!response)
		throw new Error('Comment Could not be Downvoted')
	return response
}

export const reportComment = async (comment: any, id: string) => {
	const report = await Report.create(comment)
	const response = await Comment.findOneAndUpdate({ _id: id }, {
		$push: { commentReport: report }
	})
	if (!response)
		throw new Error('Comment Could not be Reported')
	return response
}