import { Reminder } from '../models/reminder/reminder.model.ts';
import { IReminder } from '../types/IReminder.js';

export const getReminders = async (id: string) => {
	const response = await Reminder.find({ clientId: id }).populate({
		path: 'clientId',
		model: 'client',
	})
	if (!response)
		throw new Error('Reminders could not be Found')
	return response
}

export const createReminder = async (reminder: IReminder) => {
	const response = await Reminder.create(reminder)
	if (!response)
		throw new Error('Reminder Could not be Created')
	return response
}
export const updateReminder = async (reminder: IReminder, id: string) => {
	const response = await Reminder.findOneAndUpdate({ _id: id }, reminder, {
		returnOriginal: false
	})
	if (!response)
		throw new Error('Reminder Could not be Updated')
	return response
}

export const deleteReminder = async (id: string) => {
	const response = await Reminder.findOneAndDelete({ _id: id })
	if (!response)
		throw new Error('Reminder Could not be Deleted')
	return response
}

