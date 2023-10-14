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
} from "../../../../controllers/comment.controller.js";

router.get("/comments", getComments);

router.post("/comments", createComment);

router.post("/reply-to-comment", replyComment);

router.patch("/comments/:id", updateComment);

router.delete("/comments/:id", deleteComment);

router.post("/report-comments/:id", reportComment);

router.post("/upvote-comments/:id", upvoteComment);

router.post("/downvote-comments/:id", downvoteComment);

export { router as commentRoutes };
