const router = require("express").Router();

// Psychological Profile/Mental health Wellbeing //

const psychologicalProfileController = require('../../../controllers/psychologicalProfile.controller')
// ClientId required in body// 
router.post('/psychologicalProfile', psychologicalProfileController.buildPsychologicalProfile)
router.post('/psychologicalProfileStats', psychologicalProfileController.getPsychologicalProfile)
router.post('/psychologicalTest', psychologicalProfileController.setTestScore)

module.exports = router;