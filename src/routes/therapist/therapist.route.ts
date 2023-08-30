import { Router } from "express";
const router:Router = Router()

// Registration and Authentication Routes //
import { authRoutes } from "./auth/auth.route.ts";
import { postRoutes } from './communityForum/post.route.ts'
import { commentRoutes } from "./communityForum/comment.route.ts";


router.use(authRoutes)
router.use(postRoutes)
router.use(commentRoutes)




export { router as therapistRouter }