import { Router } from "express";
const router = Router()
// Reminder and Daily Tasks Module // 

import {
	getReminders, createReminder,
	editReminder, deleteReminder
} from '../../../controllers/reminder.controller.js'

router.get('/reminder', getReminders)

router.post('/reminder', createReminder)

router.patch('/reminder', editReminder)

router.delete('/reminder', deleteReminder)

export {router as reminderRoutes}