import { Router } from "express";
const router: Router = Router();
import {
	getNotificationsClient,
	createNotificationClient,
	deleteNotificationById,
	markAsReadNotificationById
} from "../../../controllers/notification.controller.js";

router.get('/:id', getNotificationsClient)
router.post('/:id', createNotificationClient)
router.get('/id', markAsReadNotificationById)
router.delete('/:id', deleteNotificationById)


export { router as notifcationRoutes }