import * as reminderService from '../services/reminder.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const getReminders = async (req, res, next) => {
    try {
        const data = await reminderService.getReminders(req.params.id);
        res.status(200).json({ status: 'success', message: 'Reminders Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createReminder = async (req, res, next) => {
    try {
        const data = await reminderService.createReminder(req.body);
        res.status(200).json({ status: 'success', message: 'Reminder Created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateReminder = async (req, res, next) => {
    try {
        const data = await reminderService.updateReminder(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Reminder modified', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteReminder = async (req, res, next) => {
    try {
        const data = await reminderService.deleteReminder(req.params.id);
        res.status(200).json({ status: 'success', message: 'Reminder Deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=reminder.controller.js.map