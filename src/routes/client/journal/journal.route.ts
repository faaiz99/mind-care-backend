import { Router } from "express";
const router = Router()

// Guided Journaling // 
// Journals can only be fetched, created or deleted //

import {
	getAllEntries
} from '../../../controllers/journal.controller.ts'

import {
	deleteDreamJournal,
	deleteAnxietyThoughtReccordJournal,
	deleteChallengingNegativeThoughtsAboutYourselfJournal,
	deleteOpenJournal,
	deleteBuildingASelfCarePlan,
	deleteCalmingtheMind,
	deleteFindingPeaceFulSpace,
	deleteGoalSettingJournal,
	deleteGratitudeJournal,
	deleteReflectionJournal,
	deleteSelfAffirmationJournal,
	deleteProblemSolvingJournal,
	deletePlanningDayAhead,
	deleteLookingForwardToTomorrow
} from '../../../controllers/journal.controller.ts'

import {
	createDreamJournal,
	createAnxietyThoughtReccordJournal,
	createChallengingNegativeThoughtsAboutYourselfJournal,
	createOpenJournal,
	createBuildingASelfCarePlan,
	createCalmingtheMind,
	createFindingPeaceFulSpace,
	createGoalSettingJournal,
	createGratitudeJournal,
	createReflectionJournal,
	createSelfAffirmationJournal,
	createProblemSolvingJournal,
	createPlanningDayAhead,
	createLookingForwardToTomorrow
} from '../../../controllers/journal.controller.ts'

router.get('/journals', getAllEntries)

router.post('/anxiety-journal', createAnxietyThoughtReccordJournal)
router.delete('/anxiety-journal', deleteAnxietyThoughtReccordJournal)

router.post('/selfcare-journal', createBuildingASelfCarePlan)
router.delete('/selfcare-journal', deleteBuildingASelfCarePlan)

router.post('/negative-thoughts-journal', createChallengingNegativeThoughtsAboutYourselfJournal)
router.delete('/negative-thoughts-journal', deleteChallengingNegativeThoughtsAboutYourselfJournal)

router.post('/open-journal', createOpenJournal)
router.delete('/open-journal', deleteOpenJournal)

router.post('/reflection-journal', createReflectionJournal)
router.delete('/reflection-journal', deleteReflectionJournal)

router.post('/self-affirmation-journal', createSelfAffirmationJournal)
router.delete('/self-affirmation-journal', deleteSelfAffirmationJournal)

router.post('/problem-solving-journal', createProblemSolvingJournal)
router.delete('/proble-msolving-journal', deleteProblemSolvingJournal)

router.post('/goal-setting-journal', createGoalSettingJournal)
router.delete('/goal-setting-journal', deleteGoalSettingJournal)

router.post('/gratitude-journal', createGratitudeJournal)
router.delete('/gratitude-journal', deleteGratitudeJournal)

// Sleep Journals and It's types // 

router.post('/calming-the-mind', createCalmingtheMind)
router.delete('/calming-the-mind', deleteCalmingtheMind)

router.post('/dream-journal', createDreamJournal)
router.delete('/dream-journal', deleteDreamJournal)

router.post('/finding-peaceful-space', createFindingPeaceFulSpace)
router.delete('/finding-peaceful-space', deleteFindingPeaceFulSpace)

router.post('/looking-forward-to-tomorrow', createLookingForwardToTomorrow)
router.delete('/looking-forward-to-tomorrow', deleteLookingForwardToTomorrow)

router.post('/planning-the-day-ahead', createPlanningDayAhead)
router.delete('/planning-the-day-ahead', deletePlanningDayAhead)


export {router as journalRoutes}