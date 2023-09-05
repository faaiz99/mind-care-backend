import { createAppointment, getAppointment,getAppointmentsClient, getAppointmentsTherapist , deleteAppointment, updateAppointment, getTherapistById, getTherapists } from "../../../controllers/appointment.controller.ts";

import { Router } from "express";

const router:Router = Router()

router.get('/appointments-client', getAppointmentsClient)
router.get('/appointments-therapist', getAppointmentsTherapist)
router.post('/appointments',createAppointment)
router.patch('appointments/:id', updateAppointment)
router.get('/appointments/:id', getAppointment)
router.delete('/appointments/:id', deleteAppointment)

router.get("/therapists", getTherapists);
router.get("/therapists/:id", getTherapistById)

// router.get("/clients")
// router.get("/clients/:id")


export {router as appointmentRoutes}
