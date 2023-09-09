import { Router } from "express";
import { 
	createPaymentIntent, 
	deletePayment, 
	getPayment, 
	getPaymentsClient, 
	updatePayment, 
	confirmPayment 
} from "../../../controllers/payment.controller.ts";

const router: Router = Router()

router.post("/payments", createPaymentIntent);
router.patch("/payments", updatePayment)
router.delete("/payments/:id", deletePayment)
router.get("/payments-clients-e", getPaymentsClient)
router.get("/payments-clients/:id", getPayment)
router.get("/payments-confirm/:id", confirmPayment)


export { router as paymentRoutes }