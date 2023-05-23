// Instantiate Express Router //

const router = require("express").Router();

// Middleware for Authentication and Issueing JWT Token // 

const authenticateToken = require('../middlewares/auth').authenticateToken
const revalidateToken = require('../middlewares/auth').revalidateToken

// User Profile Management Module //

const clientController = require('../controllers/clientController')


router.post('/password/:token', clientController.enternewPassword)
router.post('/reset-password', clientController.resetPassword)
router.get('/verify/:token', authenticateToken, clientController.verifyAccount)
router.post('/send-verification-email', clientController.sendverificationEmail)
router.post('/signup', clientController.Signup)
router.get('/refresh-token', revalidateToken, clientController.renewTokens)
router.post('/login', clientController.Login)
router.get("/profile", (req, res) => {
  res.send("About this Client");
});
router.get("/", (req, res) => {
  res.send("Client home page");
});

// Psychological Profile/Mental health Wellbeing //

const psychologicalProfileController = require('../controllers/psychologicalProfileController')
// ClientId required in body// 
router.post('/psychologicalProfile', psychologicalProfileController.buildPsychologicalProfile)
router.post('/psychologicalProfileStats', psychologicalProfileController.getPsychologicalProfile)
router.post('/psychologicalTest', psychologicalProfileController.setTestScore)



// Guided Journaling // 
// Journals can only be fetched, created or deleted //
const journalsController = require('../controllers/journalsController')

router.get('/allJournals', journalsController.getAllEntries)

router.post('/axnietyJournal', journalsController.createAnxietyThoughtReccordJournal)
router.delete('/axnietyJournal', journalsController.deleteAnxietyThoughtReccordJournal)

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

// Reminder and Daily Tasks Module // 

const reminderController = require('../controllers/reminderController')

router.get('/reminder', reminderController.getReminders)

router.post('/reminder', reminderController.createReminder)

router.patch('/reminder', reminderController.editReminder)

router.delete('/reminder', reminderController.deleteReminder)

module.exports = router;