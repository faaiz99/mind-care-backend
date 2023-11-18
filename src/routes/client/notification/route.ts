import { Router } from "express";
const router: Router = Router();
import {
  getNotificationsClient,
  createNotificationClient,
  deleteNotificationById,
  markAsReadNotificationById,
} from "../../../controllers/notification.controller.js";

router.get("/notification/:id", getNotificationsClient);
router.post("/notification/:id", createNotificationClient);
router.patch("/notification/:id", markAsReadNotificationById);
router.delete("/notification/:id", deleteNotificationById);

export { router as notifcationRoutes };
