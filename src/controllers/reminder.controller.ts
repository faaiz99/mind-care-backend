import { Request, Response,RequestHandler } from 'express'
import { Reminder } from '../models/reminder/reminder.model.ts';

export const getReminders:RequestHandler = async (req:Request, res:Response) => {
	const reminder = req.body.clientId
	let result;
	try {
		result = await Reminder.find({ clientId: reminder })
	} catch (error) {
		console.log('Reminders could not be found', error)
	}
	res.json({ status: 200, message: 'List of all Reminders', result })

}
export const createReminder:RequestHandler = async (req:Request, res:Response) => {
	const reminder = req.body
	let result
	try {
		result = await Reminder.create(reminder)
	}
	catch (error) {
		console.log('Reminder could not be created')
	}
	res.json({ status: 200, message: 'Reminder created', result })
}

export const editReminder:RequestHandler = async (req:Request, res:Response) => {
	const reminder = req.body.clientId
	let result
	try {
		result = await Reminder.findOneAndUpdate({ clientId: reminder })
	} catch (e) {
		console.log('Reminder could not be modified')
	}
	res.json({ status: 200, message: 'Reminder modified', result })
}

export const deleteReminder:RequestHandler = async (req:Request, res:Response) => {
	const reminder = req.body.clientId
	let result
	try {
		result = await Reminder.findOneAndDelete({ clientId: reminder })
	} catch (e) {
		console.log('Reminder could not be deleted')
	}
	res.json({ status: 200, message: 'Reminder deleted', result })
}