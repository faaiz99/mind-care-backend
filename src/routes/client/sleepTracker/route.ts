import { Router } from "express";
const router: Router = Router();

import {
  getSleepEfficiency,
  getSleepQuality,
  getSleepStats,
  resetSleepSchedule,
  createSleepSchedule,
  updateSleepSchedule,
} from "../../../controllers/sleepTracker.controller.js";
import { cachedSleepStats } from "../../../middlewares/cached/cache.middleware.js";

router.get("/sleep-quality/:id", getSleepQuality);
router.get("/sleep-efficiency/:id", getSleepEfficiency);
router.post("/sleep-tracker/:id", createSleepSchedule);
router.patch("/sleep-tracker/:id", updateSleepSchedule);
router.delete("/sleep-tracker/:id", resetSleepSchedule);
router.get("/sleep-stats/:id", cachedSleepStats, getSleepStats);

export { router as sleepTrackerRoutes };
