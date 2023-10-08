import { Router } from "express";
const router = Router();
import { authRoutes } from "./auth/route.js";
router.use(authRoutes);
router.get("/", (req, res) => {
    res.send("Admin");
});
export { router as adminRouter };
//# sourceMappingURL=route.js.map