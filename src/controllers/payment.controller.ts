import { RequestHandler, Request, Response, NextFunction } from 'express';
import * as paymentService from '../services/payment.service.ts'

export const createPaymentIntent: RequestHandler = async (req: Request, res: Response, next: NextFunction) : Promise<void>=> {
  try {
    const data = await paymentService.createPayment(req.body.sessionCharges)
    res.status(200).json({ status: 'success', message: 'Payment Intent Created', data})
  } catch (error) {
    next(error)
  }
}

export const getPaymentsClient: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.getPaymentsClient(req.params.id)
    res.status(200).json({ status: 'success', message: 'Client Payments Found', data })
  } catch (error) {
    next(error)
  }
}

export const getPaymentsTherapist: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.getPaymentsTherapist(req.params.id)
    res.status(200).json({ status: 'success', message: 'Therapist Payments Found', data })
  } catch (error) {
    next(error)
  }
}

export const getPayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.getPayment(req.params.id)
    res.status(200).json({ status: 'success', message: 'Payment Found', data })
  } catch (error) {
    next(error)
  }
}

export const deletePayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.deletePayment(req.params.id)
    res.status(200).json({ status: 'success', message: 'Payment Deleted', data })
  } catch (error) {
    next(error)
  }
}

export const updatePayment: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await paymentService.updatePayment(req.body)
    res.status(200).json({ status: 'success', message: 'Payments Updated', data })
  } catch (error) {
    next(error)
  }
}

export const confirmPayment:RequestHandler =  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // id checkout ID
    const data = await paymentService.confirmPayment(req.params.id)
    res.status(200).json({status:'success', message:'payment successfull', data})
  } catch (error) {
    next(error)
  }
}