import { Router } from "express";
import { createPaymentIntent, deletePayment, getPayment, getPaymentsClient, updatePayment } from "../../../controllers/payment.controller.ts";

const router: Router = Router()

router.post("/payments", createPaymentIntent);
router.patch("/payments", updatePayment)
router.delete("/payment/:id", deletePayment)
router.get("/payments-clients-e", getPaymentsClient)
router.get("/payments-clients/:id", getPayment)


export { router as paymentRoutes }