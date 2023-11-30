import { Router } from "express";
const router = Router();
// Reminder and Daily Tasks Module //

import {
  getReminders,
  createReminder,
  updateReminder,
  deleteReminder,
  getBreathingExcersiceByClientId,
  getFiveSensesExcersiceByClientId,
  getUnplugUnwindExcerciseByClientId,
  createBreathingExcersiceByClientId,
  createFiveSensesExcersiceByClientId,
  createUnplugUnwindExcerciseByClientId,
} from "../../../controllers/reminder.controller.js";
import { cachedReminders } from "../../../middlewares/cached/cache.middleware.js";

router.post(
  "/unplug-unwind-excercise/:id",
  createUnplugUnwindExcerciseByClientId,
);
router.get("/unplug-unwind-excercise/:id", getUnplugUnwindExcerciseByClientId);

router.post("/breathing-excercise/:id", createBreathingExcersiceByClientId);
router.get("/breathing-excercise/:id", getBreathingExcersiceByClientId);

router.post("/five-senses-excercise/:id", createFiveSensesExcersiceByClientId);
router.get("/five-senses-excercise/:id", getFiveSensesExcersiceByClientId);

router.get("/reminders/:id", cachedReminders, getReminders);

router.post("/reminders/:id", createReminder);

router.patch("/reminders/:id", updateReminder);

router.delete("/reminders/:id", deleteReminder);

export { router as reminderRoutes };
