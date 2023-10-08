import * as psychologicalProfileService from '../services/psychologicaProfile.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const buildPsychologicalProfile = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.buildPsychologicalProfile(req.params.id, req.body);
        res.status(200).json({ status: 'success', message: 'Psychological Profile Built', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const setTestScore = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.setTestScore(req.params.id, req.body);
        res.status(200).json({ status: 'success', message: 'Psychological Test Scores upadated', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getPsychologicalProfile = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.getPsychologicalProfile(req.params.id);
        res.status(200).json({ status: 'success', message: 'Psychological Profile Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const saveAnxietyTest = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.saveAnxietyTest(req.params.id, req.body);
        res.status(200).json({ status: 'success', message: 'Anxiety Test Saved', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const saveDepressionTest = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.saveDepressionTest(req.params.id, req.body);
        res.status(200).json({ status: 'success', message: 'Depression Test Saved', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getAnxietyTest = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.getAnxietyTest(req.params.id);
        res.status(200).json({ status: 'success', message: 'Anxiety test Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getDepressionTest = async (req, res, next) => {
    try {
        const data = await psychologicalProfileService.getDepressionTest(req.params.id);
        res.status(200).json({ status: 'success', message: 'Depression test Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=psychologicalProfile.controller.js.map