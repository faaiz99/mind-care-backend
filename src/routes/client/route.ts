import { Router } from "express";
const router:Router = Router()

import { authRoutes } from "./auth/route.ts";
import { reminderRoutes } from "./reminder/route.ts";
import { psychologicalProfileRoutes } from "./psychologicalProfile/route.ts";
import { journalRoutes } from "./journal/route.ts";
import { paymentRoutes } from "./payment/route.ts";
import { appointmentRoutes } from "./appointment/route.ts";
import { postRoutes } from './communityForum/post/route.ts'
import { commentRoutes } from "./communityForum/comment/route.ts";
import { teletherapyRoutes } from "./teletherapy/route.ts";
import { sleepTrackerRoutes } from "./sleepTracker/route.ts";


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

export { router as clientRouter }