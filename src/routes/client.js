const router = require("express").Router();
const authenticateToken = require('../middlewares/auth').authenticateToken
const revalidateToken = require('../middlewares/auth').revalidateToken
const Signup = require('../controllers/clientController').Signup
const Login = require('../controllers/clientController').Login
const verifyAccount = require('../controllers/clientController').verifyAccount
const renewTokens = require('../controllers/clientController').renewTokens
const sendEmail = require('../controllers/clientController').sendverificationEmail
const resetPassword = require('../controllers/clientController').resetPassword
const enternewPassword = require('../controllers/clientController').enternewPassword

router.post('/password/:token', enternewPassword)

router.post('/reset-password', resetPassword)

router.get("/profile", authenticateToken, (req, res) => {
  res.send("About this Client");
});
router.get("/", authenticateToken, (req, res) => {
  res.send("Client home page");
});

router.get('/verify/:token', authenticateToken, verifyAccount)

router.post('/send-verification-email', sendEmail)

router.post('/signup', Signup)
router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', Login)
module.exports = router;