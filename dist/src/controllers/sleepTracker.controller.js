import * as sleepTrackerService from '../services/sleep.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const createSleepSchedule = async (req, res, next) => {
    try {
        const data = await sleepTrackerService.createSleepSchedule(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Schedule Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateSleepSchedule = async (req, res, next) => {
    try {
        const data = await sleepTrackerService.updateSleepSchedule(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Schedule Update", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const resetSleepSchedule = async (req, res, next) => {
    try {
        const data = await sleepTrackerService.resetSleepSchedule(req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Schedule Rest", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getSleepEfficiency = async (req, res, next) => {
    try {
        const data = await sleepTrackerService.getSleepEfficiency(req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Efficiency", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getSleepQuality = async (req, res, next) => {
    try {
        const data = await sleepTrackerService.getSleepQuality(req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Quality", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=sleepTracker.controller.js.map