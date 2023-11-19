import { Router } from "express";
const router: Router = Router();

import { authRoutes } from "./auth/route.js";
import { adminPanelRoutes } from "./panel/route.js";

router.use(authRoutes);
router.use(adminPanelRoutes);

router.get("/", (req, res) => {
  res.send("Admin");
});

export { router as adminRouter };
