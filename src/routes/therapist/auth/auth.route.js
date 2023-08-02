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

router.get('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendverificationEmail)

router.get("/profile", (req, res) => {
  res.send("About this Therapist");
});

router.get('/refresh-token', revalidateToken, renewTokens)



export { router as authRoutes }