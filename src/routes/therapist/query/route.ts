import { Router } from "express";
import { queryTherapist } from "../../../controllers/therapist.controller.js";

const router: Router = Router();

router.get("/query", queryTherapist);

export { router as queryRoutes };
