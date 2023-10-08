import { Router } from "express";
import { getPaymentsTherapist, getPayment } from "../../../controllers/payment.controller.js";
const router = Router();
router.get("/payments-therapist", getPaymentsTherapist);
router.get("/payments-therapist/:id", getPayment);
export { router as paymentRoutes };
//# sourceMappingURL=route.js.map