import { Request, Response,RequestHandler } from 'express'
import { Reminder } from '../models/reminder/reminder.model.ts';

export const getReminders:RequestHandler = async (req:Request, res:Response):Promise<void> => {
	const reminder = req.body.clientId
	let result;
	try {
		result = await Reminder.find({ clientId: reminder })
	} catch (error) {
		console.log('Reminders could not be found', error)
	}
	res.status(200).json({ status: 'success', message: 'List of all Reminders', result })

}
export const createReminder:RequestHandler = async (req:Request, res:Response):Promise<void> => {
	const reminder = req.body
	let result
	try {
		result = await Reminder.create(reminder)
	}
	catch (error) {
		console.log('Reminder could not be created')
	}
	res.status(200).json({ status: 'success', message: 'Reminder created', result })
}

export const editReminder:RequestHandler = async (req:Request, res:Response):Promise<void> => {
	const reminder = req.body.clientId
	let result
	try {
		result = await Reminder.findOneAndUpdate({ clientId: reminder })
	} catch (e) {
		console.log('Reminder could not be modified')
	}
	res.status(200).json({ status: 'success', message: 'Reminder modified', result })
}

export const deleteReminder:RequestHandler = async (req:Request, res:Response):Promise<void> => {
	const reminder = req.body.clientId
	let result
	try {
		result = await Reminder.findOneAndDelete({ clientId: reminder })
	} catch (e) {
		console.log('Reminder could not be deleted')
	}
	res.status(200).json({ status: 'success', message: 'Reminder deleted', result })
}