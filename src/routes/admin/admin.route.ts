import { Router } from "express";
const router:Router = Router()

import { authRoutes } from "./auth/auth.route.ts";

router.use(authRoutes)

export { router as adminRouter}