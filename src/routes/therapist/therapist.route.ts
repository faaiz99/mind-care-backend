import { Router } from "express";
const router:Router = Router()

// Registration and Authentication Routes //
import { authRoutes } from "./auth/auth.route.ts";
import { postRoutes } from './communityForum/post.route.ts'
import { commentRoutes } from "./communityForum/comment.route.ts";
import { paymentRoutes } from "./payment/payment.route.ts";


router.use(authRoutes)
router.use(postRoutes)
router.use(commentRoutes)
router.use(paymentRoutes)




export { router as therapistRouter }