// Instantiate Express Router //

const router = require("express").Router();

// Middleware for Authentication // 

const authenticateToken = require('../middlewares/auth').authenticateToken
const revalidateToken = require('../middlewares/auth').revalidateToken

// User Profile Management Module //

const clientController = require('../controllers/clientController')


router.post('/password/:token', clientController.enternewPassword)
router.post('/reset-password', clientController.resetPassword)
router.get('/verify/:token', authenticateToken, clientController.verifyAccount)
router.post('/send-verification-email', clientController.sendEmail)
router.post('/signup', clientController.Signup)
router.get('/refresh-token', revalidateToken, clientController.renewTokens)
router.post('/login', clientController.Login)
router.get("/profile", authenticateToken, (req, res) => {
  res.send("About this Client");
});
router.get("/", authenticateToken, (req, res) => {
  res.send("Client home page");
});





const reminderController = require('../controllers/reminderController')

router.get('/reminder', reminderController.getReminders)

router.post('/reminder', reminderController.createReminder)

router.patch('/reminder', reminderController.editReminder)

router.delete('/reminder', reminderController.deleteReminder)

module.exports = router;