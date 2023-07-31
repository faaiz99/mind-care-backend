import { Router } from "express";
const router = Router()

import { authRoutes } from "./auth/auth.route.js";
import { reminderRoutes } from "./reminder/reminder.route.js";
import { psychologicalProfileRoutes } from "./psychologicalProfile/psychologicalProfile.route.js";
import { journalRoutes } from "./journal/journal.route.js";

router.use(authRoutes)
router.use(journalRoutes)
router.use(reminderRoutes)
router.use(psychologicalProfileRoutes)

router.get("/", (req, res) => {
  res.send("Client home page");
});

export { router as clientRouter }