import {
  createAppointment,
  addSessionNotes,
  getAppointment,
  getAppointmentsClient,
  deleteAppointment,
  updateAppointment,
  getTherapistById,
  getTherapists,
  addTherapistReview,
  getTherapistReview,
} from "../../../controllers/appointment.controller.js";
import { Router } from "express";
import {
  cachedTherapists,
  cachedAppointmentsClient,
} from "../../../middlewares/cached/cache.middleware.js";

const router: Router = Router();

router.get(
  "/appointments-client/:id",
  cachedAppointmentsClient,
  getAppointmentsClient,
);
router.post("/appointments", createAppointment);
router.patch("appointments/:id", updateAppointment);
router.get("/appointments/:id", getAppointment);
router.delete("/appointments/:id", deleteAppointment);

router.get("/therapists", cachedTherapists, getTherapists);
router.get("/therapists/:id", getTherapistById);

// router.get("/clients")
// router.get("/clients/:id")

router.patch("/therapist-review/:id", addTherapistReview);
router.get("/therapist-review/:id", getTherapistReview);
router.patch("session-notes/:id", addSessionNotes);

export { router as appointmentRoutes };
