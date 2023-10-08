import { Router } from "express";
const router = Router()
// Reminder and Daily Tasks Module // 

import {
	getReminders, createReminder,
	updateReminder, deleteReminder
} from '../../../controllers/reminder.controller.js'


// router.get('/reminders-/:id', getReminders)

router.get('/reminders/:id', getReminders)

router.post('/reminders/:id', createReminder)

router.patch('/reminders/:id', updateReminder)

router.delete('/reminders/:id', deleteReminder)

export {router as reminderRoutes}