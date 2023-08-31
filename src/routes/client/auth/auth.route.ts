// Instantiate Express Router //
import { Router } from "express";
const router:Router = Router()

// Middleware for Authentication and Issueing JWT Token // 

import {
  authenticateToken,
  revalidateToken,
} from "../../../middlewares/auth.middleware.ts";

// User Profile Management Module //

import {
  enternewPassword, resetPassword,
  verifyAccount, sendverificationEmail,
  login, signup, renewToken
} from "../../../controllers/client.controller.ts";

router.post('/password/:token', enternewPassword)
router.post('/reset-password', resetPassword)
router.post('/verify/:token', authenticateToken, verifyAccount)
router.post('/send-verification-email', sendverificationEmail)
router.post('/signup', signup)
router.post('/refresh-token', revalidateToken, renewToken)
router.post('/login', login)
router.get("/profile", (req, res) => {
  res.send("About this Client");
});
router.get("/", (req, res) => {
  res.send("Client");
});

export { router as authRoutes }