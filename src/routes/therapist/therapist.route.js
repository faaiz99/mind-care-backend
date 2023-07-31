import { Router } from "express";
const router = Router()

// Registration and Authentication Routes //
import { authRoutes } from './auth/auth.route.js'
import { communityForumRoutes } from './communityForum/communityForum.route.js'

router.use(authRoutes)
router.use(communityForumRoutes)

router.get("/", (req, res) => {
  res.send("Therapist home page");
});



export { router as therapistRouter }