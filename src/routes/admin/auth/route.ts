import { Router } from "express";
const router: Router = Router()

import { authenticateToken, revalidateToken } from "../../../middlewares/auth/middleware.ts";
import { signup, login, renewToken, about, index } from "../../../controllers/admin.controller.ts";

router.post('/signup', signup)
router.post('/refresh-token', revalidateToken, renewToken)
router.post('/login', login)
router.get("/about/:id", about);
router.get("/", authenticateToken, index);

export { router as authRoutes }