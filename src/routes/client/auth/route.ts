// Instantiate Express Router //
import { Router } from "express";
const router: Router = Router();

// Middleware for Authentication and Issueing JWT Token //

import {
  authenticateToken,
  revalidateToken,
} from "../../../middlewares/auth/middleware.js";

// User Profile Management Module //

import {
  enternewPassword,
  resetPassword,
  verifyAccount,
  sendverificationEmail,
  login,
  signup,
  renewToken,
  about,
} from "../../../controllers/client.controller.js";

router.post("/password/:token", enternewPassword);
router.post("/reset-password", resetPassword);
router.post("/verify/:token", authenticateToken, verifyAccount);
router.post("/send-verification-email", sendverificationEmail);
router.post("/signup", signup);
router.post("/refresh-token", revalidateToken, renewToken);
router.post("/login", login);
router.get("/about/:id", about);
router.get("/", (req, res) => {
  res.send("Client");
});

export { router as authRoutes };
