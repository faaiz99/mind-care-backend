import { Router } from "express";
const router = Router()

import { authenticateToken, revalidateToken } from "../../../middlewares/auth.middleware.js";
import { signup, login, renewTokens } from "../../../controllers/admin.controller.js";

router.get("/profile", authenticateToken, (req, res) => {
  res.send("About this admin");
});
router.get("/", authenticateToken, (req, res) => {
  res.send("Admin home page");
});

router.post('/signup', signup)
router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', login)


export { router as authRoutes }