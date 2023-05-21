const router = require("express").Router();
const authenticateToken = require('../middlewares/auth').authenticateToken
const revalidateToken = require('../middlewares/auth').revalidateToken
const Signup = require('../controllers/therapistController').Signup
const Login = require('../controllers/therapistController').Login
const verifyAccount = require('../controllers/therapistController').verifyAccount
const renewTokens = require('../controllers/therapistController').renewTokens
const sendEmail = require('../controllers/therapistController').sendverificationEmail
const resetPassword = require('../controllers/therapistController').resetPassword
const enternewPassword = require('../controllers/therapistController').enternewPassword


router.post('/signup', Signup)

router.post('/password/:token', enternewPassword)

router.post('/reset-password', resetPassword)

router.get("/profile", (req, res) => {
  res.send("About this Client");
});
router.get("/", (req, res) => {
  res.send("Client home page");
});

router.get('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendEmail)

router.get("/profile", (req, res) => {
  res.send("About this Therapist");
});
router.get("/", (req, res) => {
  res.send("Therapist home page");
});


router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', Login)
module.exports = router;