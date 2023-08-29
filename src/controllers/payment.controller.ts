/* eslint-disable @typescript-eslint/no-unused-vars */




import { RequestHandler, Request, Response } from 'express';
import { stripe, API_URL } from '../config/stripe.config.ts';

export const createPaymentIntent: RequestHandler = async (req: Request, res: Response) => {

  /*
    therapist id is required 
    client id is required 
  */

  const { sessionCharges} = req.body
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: "Therapy"
          },
          unit_amount: sessionCharges
        },
        quantity: 1
      },
    ],
    mode: 'payment',
    success_url: `${API_URL}/client?success=true`,
    cancel_url: `${API_URL}/client?canceled=true`,
  },
  );

  res.status(302).json({ message: 'Payment Intent Created', url: session.url })
}


