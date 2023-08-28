import { Router } from "express";
const router = Router()


// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { authRoutes } from "./auth/auth.route.ts";
import { reminderRoutes } from "./reminder/reminder.route.ts";
import { psychologicalProfileRoutes } from "./psychologicalProfile/psychologicalProfile.route.ts";
import { journalRoutes } from "./journal/journal.route.ts";


// router.use(authRoutes)
router.use(journalRoutes)
router.use(reminderRoutes)
router.use(psychologicalProfileRoutes)

router.get("/", (req, res) => {
  res.send("Client home page");
});

export { router as clientRouter }