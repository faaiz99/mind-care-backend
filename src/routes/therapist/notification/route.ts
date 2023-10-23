import { Router } from "express";
const router: Router = Router();
import {
	getNotificationsTherapist,
	createNotificationTherapist,
	deleteNotificationById,
	markAsReadNotificationById
} from "../../../controllers/notification.controller.js";

router.get('/:id', getNotificationsTherapist)
router.post('/:id', createNotificationTherapist)
router.get('/id', markAsReadNotificationById)
router.delete('/:id', deleteNotificationById)


export { router as notifcationRoutes }