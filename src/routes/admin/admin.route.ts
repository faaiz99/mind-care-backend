import { Router } from "express";
const router:Router = Router()

import { authRoutes } from "./auth/auth.route.ts";

router.use(authRoutes)


router.get("/", (req, res) => {
    res.send("Admin");
  });

export { router as adminRouter}