import { Router } from "express";
const router:Router = Router()

// Registration and Authentication Routes //
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { authRoutes } from "./auth/auth.route.ts";
import { postRoutes } from './communityForum/post.route.ts'
import { commentRoutes } from "./communityForum/comment.route.ts";

// router.use(authRoutes)
router.use(postRoutes)
router.use(commentRoutes)

router.get("/", (req, res) => {
  res.send("Therapist home page");
});



export { router as therapistRouter }