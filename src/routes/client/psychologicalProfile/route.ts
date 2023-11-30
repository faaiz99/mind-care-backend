import { Router } from "express";
const router = Router();

// Psychological Profile/Mental health Wellbeing //

import {
  buildPsychologicalProfile,
  getPsychologicalProfile,
  //setTestScore,
  saveAnxietyTest,
  saveDepressionTest,
  getAnxietyTest,
  getDepressionTest,
} from "../../../controllers/psychologicalProfile.controller.js";
import { cachedPsychologicalProfile } from "../../../middlewares/cached/cache.middleware.js";

// ClientId required in body//
router.post(
  "/psychological-profile/:id",
  cachedPsychologicalProfile,
  buildPsychologicalProfile,
);

//router.post('/psychological-test/:id', setTestScore)
router.post("/anxiety-test/:id", saveAnxietyTest);
router.post("/depression-test/:id", saveDepressionTest);
router.get("/psychological-profile/:id", getPsychologicalProfile);
router.get("/anxiety-test/:id", getAnxietyTest);
router.get("/depression-test/:id", getDepressionTest);

export { router as psychologicalProfileRoutes };
