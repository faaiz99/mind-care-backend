/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '../models/communityForums/post.model.ts'
import { Upvote } from '../models/communityForums/upvote.model.ts'
import { Downvote } from '../models/communityForums/downvote.model.ts'
import { Report } from '../models/communityForums/report.model.ts'


export const createPost = async (post: any) => {
	const response = await Post.create(post)
	if (!response)
		throw new Error('Post Could not be Created')
	return response

}

export const updatePost = async (post: any, id: string) => {
	const response = await Post.findOneAndUpdate({ _id: id }, post, {
		returnOriginal: false
	})
	if (!response)
		throw new Error('Post Could not be Updated')
	return response
}

export const deletePost = async (id: string) => {
	const response = await Post.findOneAndDelete({ _id: id })
	if (!response)
		throw new Error('Post Could not be Deleted')
	return response
}

export const getPosts = async () => {
	/**
	 * This is yet to be updated
	 * with content reccomendation feed
	 * however, this is basic implementation
	 * of the getPosts because feed is populated by all posts
	 */
	const response = await Post.find()
	.populate({
		path: 'therapistId',
		model: 'therapist'
	})
	.populate({
		path:'upvotes',
		model:'upvote'
	})
	.populate({
		path:'downvotes',
		model:'downvote'
	})
	.populate({
		path:'postReport',
		model:'report'
	})
	if (!response)
		throw new Error('Posts Could not be Found')
	return response

}

export const getPost = async (id: string) => {
	const response = await Post.findOne({ _id: id })
	if (!response)
		throw new Error('Post Could not be Found')
	return response
}

export const upvotePost = async (post: any, id: string) => {
	const upvote = await Upvote.create(post)
	if (!upvote)
		throw new Error('Upvote Could not be Created')
	const response = await Post.findOneAndUpdate({ _id: id }, {
		$push: { upvotes: upvote }
	})
	if (!response)
		throw new Error('Post Could not be Upvoted')
	return response
}

export const downvotePost = async (post: any, id: string) => {
	const downvote = await Downvote.create(post)
	if (!downvote)
		throw new Error('Downvote Could not be Created')
	const response = await Post.findOneAndUpdate({ _id: id }, {
		$push: { downvotes: downvote }
	})
	if (!response)
		throw new Error('Post Could not be Downvoted')
	return response

}

export const removeUpvotePost = async (uid: string, pid: string) => {
	const response = await Post.findOneAndUpdate(
		{ _id: pid },
		{
			$pull: {
				upvotes: uid
			}
		},
		{ new: true }
	)
	if (!response)
		throw new Error('Upvote Could not be Removed')
	return response

}

export const removeDownvotePost = async (uid: string, pid: string) => {
	const response = await Post.findOneAndUpdate(
		{ _id: pid },
		{
			$pull: {
				downvotes: uid
			}
		},
		{ new: true }
	)
	if (!response)
		throw new Error('Downvote Could not be Removed')
	return response
}

export const reportPost = async (post: any, id: string) => {
	const report = await Report.create(post)
	const response = await Post.findOneAndUpdate({ _id: id }, {
		$push: { postReport: report }
	})
	if (!response)
		throw new Error('Post could not be Reported')
	return response

}

