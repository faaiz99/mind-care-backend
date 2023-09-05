import { RequestHandler, Request, Response, NextFunction } from 'express';
import * as paymentService from '../services/payment.service.ts'

export const createPaymentIntent: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await paymentService.payment(req.body.sessionCharges)
    res.status(200).json({ message: 'Payment Intent Created', url: data })
  } catch (error) {
    next(error)
  }
}



