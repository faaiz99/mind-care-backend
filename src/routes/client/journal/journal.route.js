const router = require('express').Router()


// Guided Journaling // 
// Journals can only be fetched, created or deleted //


const journalsController = require('../../../controllers/journal.controller')

router.get('/allJournals', journalsController.getAllEntries)

router.post('/anxietyJournal', journalsController.createAnxietyThoughtReccordJournal)
router.delete('/anxietyJournal', journalsController.deleteAnxietyThoughtReccordJournal)

router.post('/selfcareJournal', journalsController.createBuildingASelfCarePlan)
router.delete('/selfcareJournal', journalsController.deleteBuildingASelfCarePlan)

router.post('/negativethoughtsJournal', journalsController.createChallengingNegativeThoughtsAboutYourselfJournal)
router.delete('/negativethoughtsJournal', journalsController.deleteChallengingNegativeThoughtsAboutYourselfJournal)

router.post('/openJournal', journalsController.createOpenJournal)
router.delete('/openJournal', journalsController.deleteOpenJournal)

router.post('/reflectionJournal', journalsController.createReflectionJournal)
router.delete('/reflectionJournal', journalsController.deleteReflectionJournal)

router.post('/selfAffirmationJournal', journalsController.createSelfAffirmationJournal)
router.delete('/selfAffirmationJournal', journalsController.deleteSelfAffirmationJournal)

router.post('/problemsolvingJournal', journalsController.createProblemSolvingJournal)
router.delete('/problemsolvingJournal', journalsController.deleteProblemSolvingJournal)

router.post('/goalsettingJournal', journalsController.createGoalSettingJournal)
router.delete('/goalsettingJournal', journalsController.deleteGoalSettingJournal)

router.post('/gratitudeJournal', journalsController.createGratitudeJournal)
router.delete('/gratitudeJournal', journalsController.deleteGratitudeJournal)

// Sleep Journals and It's types // 

router.post('/calmingtheMind', journalsController.createCalmingtheMind)
router.delete('/calmingtheMind', journalsController.deleteCalmingtheMind)

router.post('/dreamJournal', journalsController.createDreamJournal)
router.delete('/dreamJournal', journalsController.deleteDreamJournal)

router.post('/findingpeacefulSpace', journalsController.createFindingPeaceFulSpace)
router.delete('/findingpeacefulSpace', journalsController.deleteFindingPeaceFulSpace)

router.post('/lookingforwardtoTomorrow', journalsController.createLookingForwardToTomorrow)
router.delete('/lookingforwardtoTomorrow', journalsController.deleteLookingForwardToTomorrow)

router.post('/planningthedayAhead', journalsController.createPlanningDayAhead)
router.delete('/planningthedayAhead', journalsController.deletePlanningDayAhead)


module.exports = router