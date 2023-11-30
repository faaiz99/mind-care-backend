import { Router } from "express";
import {
  getAppointmentsTherapist,
  updateAppointmentStatus,
} from "../../../controllers/appointment.controller.js";
import { cachedAppointmentsTherapist } from "../../../middlewares/cached/cache.middleware.js";
const router: Router = Router();

router.get(
  "/appointments-therapist/:id",
  cachedAppointmentsTherapist,
  getAppointmentsTherapist,
);
// Accept Reject Pending
router.patch("/appointments-therapist/:id", updateAppointmentStatus);

export { router as appointmentRoutes };
