import { Router } from "express";
const router:Router = Router()

import { authRoutes } from "./auth/route.js";
import { reminderRoutes } from "./reminder/route.js";
import { psychologicalProfileRoutes } from "./psychologicalProfile/route.js";
import { journalRoutes } from "./journal/route.js";
import { paymentRoutes } from "./payment/route.js";
import { appointmentRoutes } from "./appointment/route.js";
import { postRoutes } from './communityForum/post/route.js'
import { commentRoutes } from "./communityForum/comment/route.js";
import { teletherapyRoutes } from "./teletherapy/route.js";
import { sleepTrackerRoutes } from "./sleepTracker/route.js";
import { rescueSessionRoutes } from "./rescueSession/route.js";
import { fitnessRoutes } from "./fitness/route.js";

router.use(authRoutes)
router.use(journalRoutes)
router.use(reminderRoutes)
router.use(psychologicalProfileRoutes)
router.use(paymentRoutes)
router.use(appointmentRoutes)
router.use(postRoutes)
router.use(commentRoutes)
router.use(teletherapyRoutes)
router.use(sleepTrackerRoutes)
router.use(rescueSessionRoutes)
router.use(fitnessRoutes)

export { router as clientRouter }