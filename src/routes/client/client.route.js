const router = require("express").Router();

const authRoutes = require('./auth/auth.route')
const journalRoutes = require('./journal/journal.route')
const reminderRoutes = require('./reminder/reminder.route')
const psychologicalProfileRoutes = require('./psychologicalProfile/psychologicalProfile.route')

router.use(authRoutes)
router.use(journalRoutes)
router.use(reminderRoutes)
router.use(psychologicalProfileRoutes)

router.get("/", (req, res) => {
  res.send("Client home page");
});

module.exports = router;