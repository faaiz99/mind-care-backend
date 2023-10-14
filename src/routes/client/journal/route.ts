import { Router } from "express";
const router = Router();

// Guided Journaling //
// Journals can only be fetched, created or deleted //

import { getJournals } from "../../../controllers/journal.controller.js";

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
  deleteLookingForwardToTomorrow,
} from "../../../controllers/journal.controller.js";

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
  createLookingForwardToTomorrow,
} from "../../../controllers/journal.controller.js";

import {
  getAnxietyThoughtReccordJournal,
  getOpenJournal,
  getBuildingASelfCarePlan,
  getChallengingNegativeThoughtsAboutYourselfJournal,
  getDreamJournal,
  getCalmingtheMind,
  getFindingPeaceFulSpace,
  getGoalSettingJournal,
  getGratitudeJournal,
  getLookingForwardToTomorrow,
  getPlanningDayAhead,
  getProblemSolvingJournal,
  getReflectionJournal,
  getSelfAffirmationJournal,
} from "../../../controllers/journal.controller.js";

router.get("/journals/:id", getJournals);

router.post("/anxiety-journal", createAnxietyThoughtReccordJournal);
router.get("/anxiety-journal/:id", getAnxietyThoughtReccordJournal);
router.delete("/anxiety-journal/:id", deleteAnxietyThoughtReccordJournal);

router.post("/selfcare-journal", createBuildingASelfCarePlan);
router.get("/selfcare-journal/:id", getBuildingASelfCarePlan);
router.delete("/selfcare-journal/:id", deleteBuildingASelfCarePlan);

router.post(
  "/negative-thoughts-journal",
  createChallengingNegativeThoughtsAboutYourselfJournal,
);
router.get(
  "/negative-thoughts-journal/:id",
  getChallengingNegativeThoughtsAboutYourselfJournal,
);
router.delete(
  "/negative-thoughts-journal/:id",
  deleteChallengingNegativeThoughtsAboutYourselfJournal,
);

router.post("/open-journal", createOpenJournal);
router.delete("/open-journal/:id", getOpenJournal);
router.get("/open-journal/:id", deleteOpenJournal);

router.post("/reflection-journal", createReflectionJournal);
router.get("/reflection-journal/:id", getReflectionJournal);
router.delete("/reflection-journal/:id", deleteReflectionJournal);

router.post("/self-affirmation-journal", createSelfAffirmationJournal);
router.get("/self-affirmation-journal/:id", getSelfAffirmationJournal);
router.delete("/self-affirmation-journal/:id", deleteSelfAffirmationJournal);

router.post("/problem-solving-journal", createProblemSolvingJournal);
router.get("/proble-msolving-journal/:id", getProblemSolvingJournal);
router.delete("/proble-msolving-journal/:id", deleteProblemSolvingJournal);

router.post("/goal-setting-journal", createGoalSettingJournal);
router.get("/goal-setting-journal/:id", getGoalSettingJournal);
router.delete("/goal-setting-journal/:id", deleteGoalSettingJournal);

router.post("/gratitude-journal", createGratitudeJournal);
router.get("/gratitude-journal/:id", getGratitudeJournal);
router.delete("/gratitude-journal/:id", deleteGratitudeJournal);

// Sleep Journals and It's types //

router.post("/calming-the-mind", createCalmingtheMind);
router.get("/calming-the-mind/:id", getCalmingtheMind);
router.delete("/calming-the-mind", deleteCalmingtheMind);

router.post("/dream-journal", createDreamJournal);
router.get("/dream-journal/:id", getDreamJournal);
router.delete("/dream-journal/:id", deleteDreamJournal);

router.post("/finding-peaceful-space", createFindingPeaceFulSpace);
router.get("/finding-peaceful-space-journal/:id", getFindingPeaceFulSpace);
router.delete(
  "/finding-peaceful-space-journal/:id",
  deleteFindingPeaceFulSpace,
);

router.post("/looking-forward-to-tomorrow", createLookingForwardToTomorrow);
router.get(
  "/looking-forward-to-tomorrow-journal/:id",
  getLookingForwardToTomorrow,
);
router.delete(
  "/looking-forward-to-tomorrow-journal/:id",
  deleteLookingForwardToTomorrow,
);

router.post("/planning-the-day-ahead", createPlanningDayAhead);
router.get("/planning-the-day-ahead-journal/:id", getPlanningDayAhead);
router.delete("/planning-the-day-ahead-journal/:id", deletePlanningDayAhead);

export { router as journalRoutes };
