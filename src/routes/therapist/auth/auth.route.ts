import { Router } from "express";
const router:Router = Router()

import { authenticateToken } from "../../../middlewares/auth.middleware.ts";
import { revalidateToken } from "../../../middlewares/auth.middleware.ts";

import {
  signup,
  login,
  verifyAccount,
  sendVerificationEmail,
  resetPassword,
  updateProfile,
  changePassword,
  enterNewPassword,
  renewTokens,
  about

} from "../../../controllers/therapist.controller.ts";


router.post('/signup', signup)

router.post('/login', login)

router.post('/change-password', changePassword)

router.post('/password/:token', enterNewPassword)

router.post('/reset-password', resetPassword)

router.patch("/update-profile", updateProfile);

router.post('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendVerificationEmail)

router.get("/about/:id", about);

router.post('/refresh-token', revalidateToken, renewTokens)
router.get("/", (req, res) => {
  res.send("Therapist");
});

export { router as authRoutes }