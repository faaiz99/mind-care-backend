import { Router } from "express";
const router = Router()

import { authenticateToken } from "../../../middlewares/auth.middleware.js";
import { revalidateToken } from "../../../middlewares/auth.middleware.js";

import {
  signup,
  login,
  verifyAccount,
  sendverificationEmail,
  resetPassword,
  updateProfile,
  changePassword,
  enternewPassword,
  renewTokens,

} from "../../../controllers/therapist.controller.js";


router.post('/signup', signup)

router.post('/change-password', changePassword)

router.post('/password/:token', enternewPassword)

router.post('/reset-password', resetPassword)

router.patch("/update-profile", updateProfile);

router.get('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendverificationEmail)

router.get("/profile", (req, res) => {
  res.send("About this Therapist");
});

router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', login)


export { router as authRoutes }