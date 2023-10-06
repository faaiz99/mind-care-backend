import { RequestHandler, Request, Response, NextFunction } from 'express';
import * as paymentService from '../services/payment.service.ts'
import { handleError } from '../middlewares/error.middlewar.ts';

export const createPaymentIntent: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.createPayment(req.body.sessionCharges)
    res.status(201).json({ status: 'success', message: 'Payment Intent Created', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const getPaymentsClient: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.getPaymentsClient(req.params.id)
    res.status(200).json({ status: 'success', message: 'Client Payments Found', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const getPaymentsTherapist: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.getPaymentsTherapist(req.params.id)
    res.status(200).json({ status: 'success', message: 'Therapist Payments Found', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const getPayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.getPayment(req.params.id)
    res.status(200).json({ status: 'success', message: 'Payment Found', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const deletePayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.deletePayment(req.params.id)
    res.status(200).json({ status: 'success', message: 'Payment Deleted', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const updatePayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.updatePayment(req.body, req.params.id)
    res.status(200).json({ status: 'success', message: 'Payments Updated', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const confirmPayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // id checkout ID
    const data = await paymentService.confirmPayment(req.params.id)
    res.status(200).json({ status: 'success', message: 'Payment Session Found', data })
  } catch (error) {
    handleError(error, res, next);
  }
}

export const savePayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.savePayment(req.body)
    res.status(200).json({ status: 'success', message: 'Payment Saved', data })
  } catch (error) {
    handleError(error, res, next);
  }
}