import * as paymentService from '../services/payment.service.js';
import { handleError } from '../middlewares/error/middleware.js';
export const createPaymentIntent = async (req, res, next) => {
    try {
        const data = await paymentService.createPayment(req.body.sessionCharges);
        res.status(201).json({ status: 'success', message: 'Payment Intent Created', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getPaymentsClient = async (req, res, next) => {
    try {
        const data = await paymentService.getPaymentsClient(req.params.id);
        res.status(200).json({ status: 'success', message: 'Client Payments Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getPaymentsTherapist = async (req, res, next) => {
    try {
        const data = await paymentService.getPaymentsTherapist(req.params.id);
        res.status(200).json({ status: 'success', message: 'Therapist Payments Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const getPayment = async (req, res, next) => {
    try {
        const data = await paymentService.getPayment(req.params.id);
        res.status(200).json({ status: 'success', message: 'Payment Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const deletePayment = async (req, res, next) => {
    try {
        const data = await paymentService.deletePayment(req.params.id);
        res.status(200).json({ status: 'success', message: 'Payment Deleted', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const updatePayment = async (req, res, next) => {
    try {
        const data = await paymentService.updatePayment(req.body, req.params.id);
        res.status(200).json({ status: 'success', message: 'Payments Updated', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const confirmPayment = async (req, res, next) => {
    try {
        // id checkout ID
        const data = await paymentService.confirmPayment(req.params.id);
        res.status(200).json({ status: 'success', message: 'Payment Session Found', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
export const savePayment = async (req, res, next) => {
    try {
        const data = await paymentService.savePayment(req.body);
        res.status(200).json({ status: 'success', message: 'Payment Saved', data });
    }
    catch (error) {
        handleError(error, res, next);
    }
};
//# sourceMappingURL=payment.controller.js.map