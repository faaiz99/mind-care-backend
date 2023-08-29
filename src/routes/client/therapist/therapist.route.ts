import { Router } from "express";
const router:Router = Router()

import { getTherapists, getTherapistById } from "../../../controllers/therapist.controller.ts";

router.get("/therapists", getTherapists);
router.get("/therapists/:id", getTherapistById)


export { router as therapistRoutes}