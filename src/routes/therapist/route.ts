import { Router } from "express";
const router: Router = Router();

// Registration and Authentication Routes //
import { authRoutes } from "./auth/route.js";
import { postRoutes } from "./communityForum/post/route.js";
import { commentRoutes } from "./communityForum/comment/route.js";
import { paymentRoutes } from "./payment/route.js";
import { appointmentRoutes } from "./appointment/route.js";
import { teletherapyRoutes } from "./teletherapy/route.js";
import { psychologicalProfileRoutes } from "./psychologicalProfile/route.js";
import { notifcationRoutes } from "./notification/route.js";
import { queryRoutes } from "./query/route.js";

router.use(authRoutes);
router.use(postRoutes);
router.use(commentRoutes);
router.use(paymentRoutes);
router.use(appointmentRoutes);
router.use(teletherapyRoutes);
router.use(psychologicalProfileRoutes);
router.use(notifcationRoutes);
router.use(queryRoutes);

export { router as therapistRouter };
