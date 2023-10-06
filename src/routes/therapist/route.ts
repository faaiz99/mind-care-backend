import { Router } from "express";
const router:Router = Router()

// Registration and Authentication Routes //
import { authRoutes } from "./auth/route.ts";
import { postRoutes } from './communityForum/post/route.ts'
import { commentRoutes } from "./communityForum/comment/route.ts";
import { paymentRoutes } from "./payment/route.ts";
import { appointmentRoutes } from "./appointment/route.ts";
import { teletherapyRoutes } from "./teletherapy/route.ts";
import { psychologicalProfileRoutes } from "./psychologicalProfile/route.ts";

router.use(authRoutes)
router.use(postRoutes)
router.use(commentRoutes)
router.use(paymentRoutes)
router.use(appointmentRoutes)
router.use(teletherapyRoutes)
router.use(psychologicalProfileRoutes)




export { router as therapistRouter }