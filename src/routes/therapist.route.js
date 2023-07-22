const router = require("express").Router();
const authenticateToken = require('../middlewares/auth.middleware').authenticateToken
const revalidateToken = require('../middlewares/auth.middleware').revalidateToken
const Signup = require('../controllers/therapist.controller').Signup
const Login = require('../controllers/therapist.controller').Login
const verifyAccount = require('../controllers/therapist.controller').verifyAccount
const renewTokens = require('../controllers/therapist.controller').renewTokens
const sendEmail = require('../controllers/therapist.controller').sendverificationEmail
const resetPassword = require('../controllers/therapist.controller').resetPassword
const enternewPassword = require('../controllers/therapist.controller').enternewPassword
const updateProfile = require('../controllers/therapist.controller').updateProfile
const changePassword = require('../controllers/therapist.controller').changePassword

router.post('/signup', Signup)

router.post('/changePassword', changePassword)

router.post('/password/:token', enternewPassword)

router.post('/reset-password', resetPassword)

router.patch("/updateProfile", updateProfile);

router.get('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendEmail)

router.get("/profile", (req, res) => {
  res.send("About this Therapist");
});

router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', Login)

router.get("/", (req, res) => {
  res.send("Therapist home page");
});

module.exports = router;