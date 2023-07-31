const router = require("express").Router();
const authRoutes = require("./auth/auth.route")
// Registration and Authentication Routes //

router.use(authRoutes)

router.get("/", (req, res) => {
  res.send("Therapist home page");
});

// 

module.exports = router;