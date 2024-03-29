import { Router } from "express";
const router: Router = Router();

import {
  createPost,
  updatePost,
  getPosts,
  getPost,
  deletePost,
  reportPost,
  upvotePost,
  downvotePost,
  removeDownvotePost,
  removeUpvotePost,
} from "../../../../controllers/post.controller.js";
import { cachedPosts } from "../../../../middlewares/cached/cache.middleware.js";

router.get("/posts", cachedPosts, getPosts); // Dynamic Feed

router.post("/posts", createPost);

router.get("/posts/:id", getPost);

router.patch("/posts/:id", updatePost);

router.delete("/posts/:id", deletePost);

router.post("/report-post/:id", reportPost);

router.post("/upvote-post/:id", upvotePost);

router.post("/downvote-post/:id", downvotePost);

router.delete("/upvote-post/:pid/:uid", removeUpvotePost);

router.delete("/downvote-post/:pid/:did", removeDownvotePost);

export { router as postRoutes };
