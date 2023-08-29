import { Router } from "express";
import { createPaymentIntent } from "../../../controllers/payment.controller.ts";

const router: Router = Router()

router.post("/create-payment-intent", createPaymentIntent);

export { router as paymentRoutes }