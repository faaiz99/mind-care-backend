import { Router } from "express";
const router = Router()

import {
	createComment,
	updateComment,
	getComments,
	deleteComment,
	upvoteComment,
	downvoteComment,
	reportComment
} from '../../../controllers/communityForum/comment.controller.js'

router.get('/comments', getComments) // Dynamic Feed

router.post('/comments', createComment)

router.patch('/comments/:id', updateComment)

router.delete('/comments/:id', deleteComment)

router.post('report-comments/:id', reportComment)

router.post('upvote-comments/:id', upvoteComment)

router.post('downvote-comments/:id', downvoteComment)

export { router as commentRoutes }