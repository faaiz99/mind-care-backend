import { Router } from "express";
const router = Router()

// Registration and Authentication Routes //
import { authRoutes } from "./auth/auth.route.js";
import { postRoutes } from './communityForum/post.route.js'
import { commentRoutes } from "./communityForum/comment.route.js";

router.use(authRoutes)
router.use(postRoutes)
router.use(commentRoutes)

router.get("/", (req, res) => {
  res.send("Therapist home page");
});



export { router as therapistRouter }