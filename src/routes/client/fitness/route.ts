import { Router } from "express";
const router: Router = Router();

import {
  createFitnessRecord,
  updateFitnessRecord,
  getFitnessRecords,
} from "../../../controllers/fitness.controller.js";

router.get("/fitness-tracker/:id", getFitnessRecords);
router.patch("/fitness-tracker/:id", updateFitnessRecord);
router.post("/fitness-tracker/:id", createFitnessRecord);

export { router as fitnessRoutes };
