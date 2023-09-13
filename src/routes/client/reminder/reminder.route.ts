import { Router } from "express";
const router = Router()
// Reminder and Daily Tasks Module // 

import {
	getReminders, createReminder,
	editReminder, deleteReminder
} from '../../../controllers/reminder.controller.ts'

router.get('/reminders', getReminders)

router.get('/reminders/:id', getReminders)

router.post('/reminders/:id', createReminder)

router.patch('/reminders/:id', editReminder)

router.delete('/reminders/:id', deleteReminder)

export {router as reminderRoutes}