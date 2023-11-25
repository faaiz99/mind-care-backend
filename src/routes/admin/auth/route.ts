import { Router } from "express";
const router: Router = Router();
import { revalidateToken } from "../../../middlewares/auth/middleware.js";
import {
  signup,
  login,
  renewToken,
  about,
  index,
} from "../../../controllers/admin.controller.js";

router.post("/signup", signup);
router.post("/refresh-token", revalidateToken, renewToken);
router.post("/login", login);
router.get("/about/:id", about);
router.get("/", index);

export { router as authRoutes };
