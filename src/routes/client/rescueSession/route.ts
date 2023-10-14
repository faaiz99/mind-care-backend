import { Router } from "express";
const router: Router = Router();

import {
  getAllRescueSession,
  getEnvy,
  updateEnvy,
  createEnvy,
  getAngerAndFrustration,
  updateAngerAndFrustration,
  createAngerAndFrustration,
  getCriticism,
  updateCriticism,
  createCriticism,
  getLowMood,
  updateLowMood,
  createLowMood,
  getRegainingMotivation,
  updateRegainingMotivation,
  createRegainingMotivation,
  getOverComingDistraction,
  updateOverComingDistraction,
  createOverComingDistraction,
  getRelationship,
  updateRelationship,
  createRelationship,
  getSleep,
  updateSleep,
  createSleep,
} from "../../../controllers/rescueSession.controller.js";

router.get("/rescue-sessions/:id", getAllRescueSession);

router.get("/envy/:id", getEnvy);
router.patch("/envy/:id", updateEnvy);
router.post("/envy/:id", createEnvy);

router.get("/anger-and-frustration/:id", getAngerAndFrustration);
router.patch("/anger-and-frustration/:id", updateAngerAndFrustration);
router.post("/anger-and-frustration/:id", createAngerAndFrustration);

router.get("/criticism/:id", getCriticism);
router.patch("/criticism/:id", updateCriticism);
router.post("/criticism/:id", createCriticism);

router.get("/low-mood/:id", getLowMood);
router.patch("/low-mood/:id", updateLowMood);
router.post("/low-mood/:id", createLowMood);

router.get("/regaining-motivation/:id", getRegainingMotivation);
router.patch("/regaining-motivation/:id", updateRegainingMotivation);
router.post("/regaining-motivation/:id", createRegainingMotivation);

router.get("/overcoming-distraction/:id", getOverComingDistraction);
router.patch("/overcoming-distraction/:id", updateOverComingDistraction);
router.post("/overcoming-distraction/:id", createOverComingDistraction);

router.get("/relationship/:id", getRelationship);
router.patch("/relationship/:id", updateRelationship);
router.post("/relationship/:id", createRelationship);

router.get("/sleep/:id", getSleep);
router.patch("/sleep/:id", updateSleep);
router.post("/sleep/:id", createSleep);

export { router as rescueSessionRoutes };
