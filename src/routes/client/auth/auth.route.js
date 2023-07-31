// Instantiate Express Router //

const router = require("express").Router();

// Middleware for Authentication and Issueing JWT Token // 

const authenticateToken = require('../../../middlewares/auth.middleware').authenticateToken
const revalidateToken = require('../../../middlewares/auth.middleware').revalidateToken

// User Profile Management Module //

const clientController = require('../../../controllers/client.controller')

router.post('/password/:token', clientController.enternewPassword)
router.post('/reset-password', clientController.resetPassword)
router.get('/verify/:token', authenticateToken, clientController.verifyAccount)
router.post('/send-verification-email', clientController.sendverificationEmail)
router.post('/signup', clientController.Signup)
router.get('/refresh-token', revalidateToken, clientController.renewTokens)
router.post('/login', clientController.Login)
router.get("/profile", (req, res) => {
  res.send("About this Client");
});


module.exports = router