import { Router } from "express";
const router = Router();
// Guided Journaling // 
// Journals can only be fetched, created or deleted //
import { getJournals } from '../../../controllers/journal.controller.js';
import { deleteDreamJournal, deleteAnxietyThoughtReccordJournal, deleteChallengingNegativeThoughtsAboutYourselfJournal, deleteOpenJournal, deleteBuildingASelfCarePlan, deleteCalmingtheMind, deleteFindingPeaceFulSpace, deleteGoalSettingJournal, deleteGratitudeJournal, deleteReflectionJournal, deleteSelfAffirmationJournal, deleteProblemSolvingJournal, deletePlanningDayAhead, deleteLookingForwardToTomorrow } from '../../../controllers/journal.controller.js';
import { createDreamJournal, createAnxietyThoughtReccordJournal, createChallengingNegativeThoughtsAboutYourselfJournal, createOpenJournal, createBuildingASelfCarePlan, createCalmingtheMind, createFindingPeaceFulSpace, createGoalSettingJournal, createGratitudeJournal, createReflectionJournal, createSelfAffirmationJournal, createProblemSolvingJournal, createPlanningDayAhead, createLookingForwardToTomorrow } from '../../../controllers/journal.controller.js';
router.get('/journals/:id', getJournals);
router.post('/anxiety-journal', createAnxietyThoughtReccordJournal);
router.delete('/anxiety-journal/:id', deleteAnxietyThoughtReccordJournal);
router.post('/selfcare-journal', createBuildingASelfCarePlan);
router.delete('/selfcare-journal/:id', deleteBuildingASelfCarePlan);
router.post('/negative-thoughts-journal', createChallengingNegativeThoughtsAboutYourselfJournal);
router.delete('/negative-thoughts-journal/:id', deleteChallengingNegativeThoughtsAboutYourselfJournal);
router.post('/open-journal', createOpenJournal);
router.delete('/open-journal/:id', deleteOpenJournal);
router.post('/reflection-journal', createReflectionJournal);
router.delete('/reflection-journal/:id', deleteReflectionJournal);
router.post('/self-affirmation-journal', createSelfAffirmationJournal);
router.delete('/self-affirmation-journal/:id', deleteSelfAffirmationJournal);
router.post('/problem-solving-journal', createProblemSolvingJournal);
router.delete('/proble-msolving-journal/:id', deleteProblemSolvingJournal);
router.post('/goal-setting-journal', createGoalSettingJournal);
router.delete('/goal-setting-journal/:id', deleteGoalSettingJournal);
router.post('/gratitude-journal', createGratitudeJournal);
router.delete('/gratitude-journal/:id', deleteGratitudeJournal);
// Sleep Journals and It's types // 
router.post('/calming-the-mind', createCalmingtheMind);
router.delete('/calming-the-mind', deleteCalmingtheMind);
router.post('/dream-journal', createDreamJournal);
router.delete('/dream-journal/:id', deleteDreamJournal);
router.post('/finding-peaceful-space', createFindingPeaceFulSpace);
router.delete('/finding-peaceful-space-journal/:id', deleteFindingPeaceFulSpace);
router.post('/looking-forward-to-tomorrow', createLookingForwardToTomorrow);
router.delete('/looking-forward-to-tomorrow-journal/:id', deleteLookingForwardToTomorrow);
router.post('/planning-the-day-ahead', createPlanningDayAhead);
router.delete('/planning-the-day-ahead-journal/:id', deletePlanningDayAhead);
export { router as journalRoutes };
//# sourceMappingURL=route.js.map