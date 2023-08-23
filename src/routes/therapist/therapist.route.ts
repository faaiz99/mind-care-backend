import { Router } from "express";
const router = Router()

// Registration and Authentication Routes //
import { authRoutes } from "./auth/auth.route";
import { postRoutes } from './communityForum/post.route'
import { commentRoutes } from "./communityForum/comment.route";

router.use(authRoutes)
router.use(postRoutes)
router.use(commentRoutes)

router.get("/", (req, res) => {
  res.send("Therapist home page");
});



export { router as therapistRouter }