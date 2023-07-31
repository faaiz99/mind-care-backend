const router = require('express').Router()
// Reminder and Daily Tasks Module // 


const reminderController = require('../../../controllers/reminder.controller')

router.get('/reminder', reminderController.getReminders)

router.post('/reminder', reminderController.createReminder)

router.patch('/reminder', reminderController.editReminder)

router.delete('/reminder', reminderController.deleteReminder)

module.exports = router