const router = require("express").Router();
const authenticateToken = require('../middlewares/auth').authenticateToken
const revalidateToken = require('../middlewares/auth').revalidateToken
const Signup = require('../controllers/adminController').Signup
const Login = require('../controllers/adminController').Login
const renewTokens = require('../controllers/adminController').renewTokens

router.get("/profile", authenticateToken, (req, res) => {
  res.send("About this admin");
});
router.get("/", authenticateToken, (req, res) => {
  res.send("Admin home page");
});

router.post('/signup', Signup)
router.get('/refresh-token', revalidateToken, renewTokens)
router.post('/login', Login)
module.exports = router;