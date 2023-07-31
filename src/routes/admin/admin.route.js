const router = require("express").Router();
const authRoutes = require('./auth/auth.route')

router.use(authRoutes)

module.exports = router;