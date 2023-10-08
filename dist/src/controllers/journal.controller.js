import * as journalService from '../services/journal.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const getGratitudeJournal = async (req, res, next) => {
    try {
        const data = await journalService.getGratitudeJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Gratitide Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createGratitudeJournal = async (req, res, next) => {
    try {
        const data = await journalService.createGratitudeJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Gratitide Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteGratitudeJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteGratitudeJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Gratitide Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getProblemSolvingJournal = async (req, res, next) => {
    try {
        const data = await journalService.getProblemSolvingJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Problem Solving Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createProblemSolvingJournal = async (req, res, next) => {
    try {
        const data = await journalService.createProblemSolvingJournal(req.body);
        res.status(200).json({ status: 'success', message: "Problem Solving Journal created", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteProblemSolvingJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteProblemSolvingJournal(req.params.id);
        res.status(200).json({ status: 'success', message: "Problem Solving Journal deleted", data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getGoalSettingJournal = async (req, res, next) => {
    try {
        const data = await journalService.getGoalSettingJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Goal Setting Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createGoalSettingJournal = async (req, res, next) => {
    try {
        const data = await journalService.createGoalSettingJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Goal Setting Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteGoalSettingJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteGoalSettingJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Goal Setting Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getSelfAffirmationJournal = async (req, res, next) => {
    try {
        const data = await journalService.getSelfAffirmationJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Self Affirmation Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createSelfAffirmationJournal = async (req, res, next) => {
    try {
        const data = await journalService.createSelfAffirmationJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal Created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteSelfAffirmationJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteSelfAffirmationJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Self-Affirmation Journal Created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getReflectionJournal = async (req, res, next) => {
    try {
        const data = await journalService.getReflectionJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Reflection Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createReflectionJournal = async (req, res, next) => {
    try {
        const data = await journalService.createReflectionJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Reflection Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteReflectionJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteReflectionJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Relfection Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getOpenJournal = async (req, res, next) => {
    try {
        const data = await journalService.getOpenJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Open Journal Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createOpenJournal = async (req, res, next) => {
    try {
        const data = await journalService.createOpenJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Open Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteOpenJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteOpenJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Open Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getChallengingNegativeThoughtsAboutYourselfJournal = async (req, res, next) => {
    try {
        const data = await journalService.getChallengingNegativeThoughtsAboutYourselfJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Challenging Negative Thoughts About Yourself  Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createChallengingNegativeThoughtsAboutYourselfJournal = async (req, res, next) => {
    try {
        const data = await journalService.createChallengingNegativeThoughtsAboutYourselfJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Challenge Negative Thoughts Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteChallengingNegativeThoughtsAboutYourselfJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteChallengingNegativeThoughtsAboutYourselfJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Challenge Negative Thoughts Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getBuildingASelfCarePlan = async (req, res, next) => {
    try {
        const data = await journalService.getBuildingASelfCarePlan(req.params.id);
        res.status(200).json({ status: 'success', message: 'Building Self-Care Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createBuildingASelfCarePlan = async (req, res, next) => {
    try {
        const data = await journalService.createBuildingASelfCarePlan(req.body);
        res.status(200).json({ status: 'success', message: 'Building Self-Care Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteBuildingASelfCarePlan = async (req, res, next) => {
    try {
        const data = await journalService.deleteBuildingASelfCarePlan(req.params.id);
        res.status(200).json({ status: 'success', message: 'Building Self-Care Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getAnxietyThoughtReccordJournal = async (req, res, next) => {
    try {
        const data = await journalService.getAnxietyThoughtReccordJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createAnxietyThoughtReccordJournal = async (req, res, next) => {
    try {
        const data = await journalService.createAnxietyThoughtReccordJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteAnxietyThoughtReccordJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteAnxietyThoughtReccordJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Anxiety Thought Reccord Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
// Sleep Journal has own types & Models //
export const getCalmingtheMind = async (req, res, next) => {
    try {
        const data = await journalService.getCalmingtheMind(req.params.id);
        res.status(200).json({ status: 'success', message: 'Calming The Mind Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createCalmingtheMind = async (req, res, next) => {
    try {
        const data = await journalService.createCalmingtheMind(req.body);
        res.status(200).json({ status: 'success', message: 'Calming the Mind Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteCalmingtheMind = async (req, res, next) => {
    try {
        const data = await journalService.deleteCalmingTheMind(req.params.id);
        res.status(200).json({ status: 'success', message: 'Calming the Mind Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getDreamJournal = async (req, res, next) => {
    try {
        const data = await journalService.getDreamJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Dream Journal Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createDreamJournal = async (req, res, next) => {
    try {
        const data = await journalService.createDreamJournal(req.body);
        res.status(200).json({ status: 'success', message: 'Dream Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteDreamJournal = async (req, res, next) => {
    try {
        const data = await journalService.deleteDreamJournal(req.params.id);
        res.status(200).json({ status: 'success', message: 'Dream Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getFindingPeaceFulSpace = async (req, res, next) => {
    try {
        const data = await journalService.getFindingPeaceFulSpace(req.params.id);
        res.status(200).json({ status: 'success', message: 'Finding Peace Space Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createFindingPeaceFulSpace = async (req, res, next) => {
    try {
        const data = await journalService.createFindingPeaceFulSpace(req.body);
        res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteFindingPeaceFulSpace = async (req, res, next) => {
    try {
        const data = await journalService.deleteFindingPeaceFulSpace(req.params.id);
        res.status(200).json({ status: 'success', message: 'Finding Peaceful Space Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getLookingForwardToTomorrow = async (req, res, next) => {
    try {
        const data = await journalService.getLookingForwardToTomorrow(req.params.id);
        res.status(200).json({ status: 'success', message: 'Looking Forward To Tomorrow Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createLookingForwardToTomorrow = async (req, res, next) => {
    try {
        const data = await journalService.createLookingForwardToTomorrow(req.body);
        res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deleteLookingForwardToTomorrow = async (req, res, next) => {
    try {
        const data = await journalService.deleteLookingForwardToTomorrow(req.params.id);
        res.status(200).json({ status: 'success', message: 'Looking Forward to Tomorrow Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getPlanningDayAhead = async (req, res, next) => {
    try {
        const data = await journalService.getPlanningDayAhead(req.params.id);
        res.status(200).json({ status: 'success', message: 'Planning The Day Ahead Journal found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const createPlanningDayAhead = async (req, res, next) => {
    try {
        const data = await journalService.createPlanningDayAhead(req.body);
        res.status(200).json({ status: 'success', message: 'Planning the day Ahead Journal created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deletePlanningDayAhead = async (req, res, next) => {
    try {
        const data = await journalService.deletePlanningDayAhead(req.params.id);
        res.status(200).json({ status: 'success', message: 'Planning the day Ahead Journal deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
// Get all Journals // 
export const getJournals = async (req, res, next) => {
    try {
        const data = await journalService.getJournals(req.params.id);
        res.status(200).json({ status: 'success', message: 'Journals Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=journal.controller.js.map