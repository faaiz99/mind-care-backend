import { Router } from "express";
const router = Router();

// Psychological Profile/Mental health Wellbeing //

import {
  getAnxietyTest,
  getDepressionTest,
  getPsychologicalProfile,
} from "../../../controllers/psychologicalProfile.controller.js";

router.get("/depression-test/:id", getDepressionTest);
router.get("/anxiety-test/:id", getAnxietyTest);
router.get("/psychological-profile/:id", getPsychologicalProfile);

export { router as psychologicalProfileRoutes };
