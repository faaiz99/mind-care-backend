import { Router } from "express";
const router: Router = Router();
import {
  getNotificationsTherapist,
  createNotificationTherapist,
  deleteNotificationById,
  markAsReadNotificationById,
} from "../../../controllers/notification.controller.js";

router.get("/notifiation/:id", getNotificationsTherapist);
router.post("/notification/:id", createNotificationTherapist);
router.patch("/notification/:id", markAsReadNotificationById);
router.delete("/notification/:id", deleteNotificationById);

export { router as notifcationRoutes };
