import { Router } from "express";
const router:Router = Router()

import { authenticateToken, revalidateToken } from "../../../middlewares/auth.middleware.ts";
import { signup, login, renewTokens } from "../../../controllers/admin.controller.ts";

router.get("/profile", authenticateToken, (req, res) => {
  res.send("About this admin");
});

router.post('/signup', signup)
router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', login)
router.get("/", authenticateToken, (req, res) => {
  res.send("Admin home page");
});

export { router as authRoutes }