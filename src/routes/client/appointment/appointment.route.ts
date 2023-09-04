import { createAppointment } from "../../../controllers/appointment.controller.ts";
import { Router } from "express";


const router:Router = Router()


router.get('/appointment', createAppointment)


export {router as appointmentRoutes}
