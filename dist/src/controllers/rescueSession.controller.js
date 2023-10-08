import * as rescueSessionService from '../services/rescueSession.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const getAllRescueSession = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getAllRescueSessions(req.params.id);
        res.status(200).json({ status: "success", message: "All Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getAngerAndFrustration = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getAngerAndFrustration(req.params.id);
        res.status(200).json({ status: "success", message: "Anger And Frustration Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getRelationship = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getRelationship(req.params.id);
        res.status(200).json({ status: "success", message: "Relationship Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getRegainingMotivation = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getRegainingMotivation(req.params.id);
        res.status(200).json({ status: "success", message: "Regaining Motivation Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getCriticism = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getCriticism(req.params.id);
        res.status(200).json({ status: "success", message: "Criticism Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getSleep = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getSleep(req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getEnvy = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getEnvy(req.params.id);
        res.status(200).json({ status: "success", message: "Envy Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getLowMood = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getLowMood(req.params.id);
        res.status(200).json({ status: "success", message: "Low Mood Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getOverComingDistraction = async (req, res, next) => {
    try {
        const data = await rescueSessionService.getOverComingDistraction(req.params.id);
        res.status(200).json({ status: "success", message: "OverComingDistraction Rescue Session Found", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createLowMood = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createLowMood(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Low Mood Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateLowMood = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateLowMood(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Low Mood Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createOverComingDistraction = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createOverComingDistraction(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Overcoming Distraction Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateOverComingDistraction = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateOverComingDistraction(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Overcoming Distraction Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createRegainingMotivation = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createRegainingMotivation(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Regaining Motivation Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateRegainingMotivation = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateRegainingMotivation(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Regaining Motivation Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createCriticism = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createCriticism(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Criticism Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateCriticism = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateCriticism(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Criticism Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createRelationship = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createRelationship(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Relationship Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateRelationship = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateRelationship(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Relationship Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createEnvy = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createEnvy(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Envy Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateEnvy = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateEnvy(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Envy Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createSleep = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createSleep(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Sleep Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateSleep = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateSleep(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Sleep Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createAngerAndFrustration = async (req, res, next) => {
    try {
        const data = await rescueSessionService.createAngerAndFrustration(req.body, req.params.id);
        res.status(201).json({ status: "success", message: "Anger And Frustration Rescue Session Created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updateAngerAndFrustration = async (req, res, next) => {
    try {
        const data = await rescueSessionService.updateAngerAndFrustration(req.body, req.params.id);
        res.status(200).json({ status: "success", message: "Anger And Frustration Rescue Session Updated", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=rescueSession.controller.js.map