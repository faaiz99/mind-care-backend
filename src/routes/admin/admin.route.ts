import { Router } from "express";
const router = Router()

import { authRoutes } from "./auth/auth.route.js";

router.use(authRoutes)

export { router as adminRouter}