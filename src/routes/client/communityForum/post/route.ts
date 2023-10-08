import { Router } from "express";
const router:Router = Router()

import {
	createPost,
	updatePost,
	getPosts,
	getPost,
	deletePost,
	reportPost,
	upvotePost,
	downvotePost
} from '../../../../controllers/post.controller.js'

/**
 * @swagger
 * tags:
 *   name: Post Controller
 *   description: API to manage posts
 */
 
/**
 * @swagger
 * /posts:
 *   post:
 *     description: Gets all the posts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

router.get('/posts', getPosts) // Dynamic Feed

router.post('/posts', createPost)

router.get('/posts/:id', getPost)

router.patch('/posts/:id', updatePost)

router.delete('/posts/:id', deletePost)

router.post('/report-post/:id', reportPost)

router.post('/upvote-post/:id', upvotePost)

router.post('/downvote-post/:id', downvotePost)


export { router as postRoutes }