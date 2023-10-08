import { Router } from "express";
const router = Router();
import { getSleepEfficiency, getSleepQuality, resetSleepSchedule, createSleepSchedule, updateSleepSchedule, } from "../../../controllers/sleepTracker.controller.js";
router.get('/sleep-quality/:id', getSleepQuality);
router.get('/sleep-efficiency/:id', getSleepEfficiency);
router.post('/sleep-tracker/:id', createSleepSchedule);
router.patch('/sleep-tracker/:id', updateSleepSchedule);
router.delete('/sleep-tracker/:id', resetSleepSchedule);
export { router as sleepTrackerRoutes };
//# sourceMappingURL=route.js.map