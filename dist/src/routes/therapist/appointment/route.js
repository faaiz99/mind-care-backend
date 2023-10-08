import { Router } from "express";
import { getAppointmentsTherapist, updateAppointmentStatus } from "../../../controllers/appointment.controller.js";
const router = Router();
router.get('/appointments-therapist/:id', getAppointmentsTherapist);
// Accept Reject Pending
router.patch('/appointments-therapist/:id', updateAppointmentStatus);
export { router as appointmentRoutes };
//# sourceMappingURL=route.js.map