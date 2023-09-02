import { Router } from "express";
const router:Router = Router()

import { authenticateToken } from "../../../middlewares/auth.middleware.ts";
import { revalidateToken } from "../../../middlewares/auth.middleware.ts";

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
  about

} from "../../../controllers/therapist.controller.ts";


/**
 * @swagger
 * /Sign Up:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
router.post('/signup', signup)

/**
 * @swagger
 * /Login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */

router.post('/login', login)

router.post('/change-password', changePassword)

router.post('/password/:token', enternewPassword)

router.post('/reset-password', resetPassword)

router.patch("/update-profile", updateProfile);

router.post('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendverificationEmail)

router.get("/about/:id", about);

router.post('/refresh-token', revalidateToken, renewTokens)
router.get("/", (req, res) => {
  res.send("Therapist");
});

export { router as authRoutes }