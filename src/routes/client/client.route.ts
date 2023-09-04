import { Router } from "express";
const router:Router = Router()


import { authRoutes } from "./auth/auth.route.ts";
import { reminderRoutes } from "./reminder/reminder.route.ts";
import { psychologicalProfileRoutes } from "./psychologicalProfile/psychologicalProfile.route.ts";
import { journalRoutes } from "./journal/journal.route.ts";
import { paymentRoutes } from "../client/payment/payment.route.ts";
//import { therapistRoutes } from "./therapist/therapist.route.ts";
import { appointmentRoutes } from "./appointment/appointment.route.ts";


router.use(authRoutes)
router.use(journalRoutes)
router.use(reminderRoutes)
router.use(psychologicalProfileRoutes)
router.use(paymentRoutes)
//router.use(therapistRoutes)
router.use(appointmentRoutes)



export { router as clientRouter }