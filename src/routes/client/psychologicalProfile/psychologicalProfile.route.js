import { Router } from "express";
const router = Router()

// Psychological Profile/Mental health Wellbeing //

import {
	buildPsychologicalProfile,
	getPsychologicalProfile,
	setTestScore
}
from "../../../controllers/psychologicalProfile.controller.js";

// ClientId required in body// 
router.post('/psychological-profile', buildPsychologicalProfile)
router.post('/psychological-profile-stats', getPsychologicalProfile)
router.post('/psychological-test', setTestScore)

export {router as psychologicalProfileRoutes}