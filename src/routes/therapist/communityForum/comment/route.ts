import { Router } from "express";
const router: Router = Router();

import {
  createComment,
  updateComment,
  getComments,
  replyComment,
  deleteComment,
  upvoteComment,
  downvoteComment,
  reportComment,
  removeDownvoteComment,
  removeUpvoteComment,
} from "../../../../controllers/comment.controller.js";
import { cachedComments } from "../../../../middlewares/cached/cache.middleware.js";

router.get("/comments/:id", cachedComments, getComments);

router.post("/comments/:id", createComment);

router.post("/reply-to-comment/:id", replyComment);

router.patch("/comments/:id", updateComment);

router.delete("/comments/:id", deleteComment);

router.post("/report-comments/:id", reportComment);

router.post("/upvote-comments/:id", upvoteComment);

router.post("/downvote-comments/:id", downvoteComment);

router.delete("/upvote-comment/:cid/:uid", removeUpvoteComment);

router.delete("/downvote-comment/:cid/:did", removeDownvoteComment);

export { router as commentRoutes };
