import { Router } from "express";
import { createPaymentIntent, deletePayment, getPayment, getPaymentsClient, updatePayment, confirmPayment, savePayment } from "../../../controllers/payment.controller.js";
const router = Router();
router.post("/payments", createPaymentIntent);
router.patch("/payments/:id", updatePayment);
router.delete("/payments/:id", deletePayment);
router.get("/payments-clients/:id", getPaymentsClient);
router.get("/payments-clients/:id", getPayment);
router.get("/payments-confirm/:id", confirmPayment);
router.post("/payments-save", savePayment);
export { router as paymentRoutes };
//# sourceMappingURL=route.js.map