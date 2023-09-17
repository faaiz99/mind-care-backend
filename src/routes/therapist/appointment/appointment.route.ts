import { Router } from "express";
import { getAppointmentsTherapist } from "../../../controllers/appointment.controller.ts";

const router:Router = Router()

router.get('/appointments-therapist/:id', getAppointmentsTherapist)

export { router as appointmentRoutes}