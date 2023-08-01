import { Router } from "express";
const router = Router()

import {
	createPost,
	updatePost,
	getPosts,
	getPost,
	deletePost,
	reportPost,
	upvotePost,
	downvotePost
} from '../../../controllers/communityForum/post.controller.js'

router.get('/posts', getPosts) // Dynamic Feed

router.post('/post', createPost)

router.get('/posts/:id', getPost)

router.patch('/posts/:id', updatePost)

router.delete('/post/:id', deletePost)

router.post('report-post/:id', reportPost)

router.post('upvote-post/:id', upvotePost)

router.post('downvote-post/:id', downvotePost)


export { router as postRoutes }