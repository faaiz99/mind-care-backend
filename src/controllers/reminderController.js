const Reminder = require('../models/reminder')


exports.getReminders = async (req, res) => {
	const reminder = await Reminder.find({})
	if (reminder)
		res.json({ status: 200, message: 'List of all Reminders', reminder })
	else
		res.json({ status: 404, message: 'No Reminders Found', reminder })

}
exports.createReminder = async (req, res) => {
	const reminder = req.body
	var result
	try {
		result = await Reminder.create(reminder)
	}
	catch (error) {
		console.log('Reminder could not be created')
	}
	res.json({ status: 200, message: 'Reminder created', result })
}

exports.editReminder = async (req, res) => {
	const reminder = req.body
	var result
	try {
		result = await Reminder.findOneAndUpdate(reminder)
	} catch (e) {
		console.log('Reminder could not be modified')
	}
	res.json({ status: 200, message: 'Reminder modified', result })
}

exports.deleteReminder = async (req, res) => {
	const reminder = req.body
	var result
	try {
		result = await Reminder.findOneAndDelete(reminder)
	} catch (e) {
		console.log('Reminder could not be deleted')
	}
	res.json({ status: 200, message: 'Reminder deleted', result })
}