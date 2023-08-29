/* eslint-disable @typescript-eslint/no-unused-vars */
import Stripe from 'stripe';
import dotenv from 'dotenv'
import { RequestHandler, Request, Response, NextFunction } from 'express';
const SECRET_STRIPE: string | undefined = dotenv?.config()?.parsed?.SECRET_STRIPE ?? ''
const API_URL: string | undefined = dotenv?.config()?.parsed?.API_URL ?? ''

const stripe = new Stripe(SECRET_STRIPE, {
  apiVersion: "2023-08-16"
});



// export const createPayout: RequestHandler = async (req: Request, res: Response) => {
//   const payout = await stripe.payouts.create({
//     amount:5000,
//     currency:"usd"
//   })
//   console.log(payout)

// }

export const createPaymentIntent: RequestHandler = async (req: Request, res: Response, next:NextFunction) => {
 
  /*
    therapist data is required 
    client data is required 
  */


  const {sessionCharges} = req.body
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


