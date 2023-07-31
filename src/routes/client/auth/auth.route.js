// Instantiate Express Router //
import { Router } from "express";
const router = Router()

// Middleware for Authentication and Issueing JWT Token // 

import {
  authenticateToken,
  revalidateToken,
} from "../../../middlewares/auth.middleware.js";

// User Profile Management Module //

import {
  enternewPassword, resetPassword,
  verifyAccount, sendverificationEmail,
  login, signup, renewTokens
} from "../../../controllers/client.controller.js";

router.post('/password/:token', enternewPassword)
router.post('/reset-password', resetPassword)
router.get('/verify/:token', authenticateToken, verifyAccount)
router.post('/send-verification-email', sendverificationEmail)
router.post('/signup', signup)
router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', login)
router.get("/profile", (req, res) => {
  res.send("About this Client");
});

export { router as authRoutes }