import { Router } from "express";
const router:Router = Router()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { authRoutes } from "./auth/auth.route.ts";

router.use(authRoutes)

export { router as adminRouter}