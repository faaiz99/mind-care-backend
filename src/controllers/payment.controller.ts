import Stripe from 'stripe';
import dotenv from 'dotenv'
import { RequestHandler, Request, Response } from 'express';
const SECRET_STRIPE : string | undefined = dotenv?.config()?.parsed?.SECRET_STRIPE ?? ''
// const PUB_STRIPE : string | undefined = dotenv?.config()?.parsed?.PUB_STRIPE ?? ''
const API_URL : string | undefined = dotenv?.config()?.parsed?.API_URL ?? ''


const stripe = new Stripe(SECRET_STRIPE, {
  apiVersion: "2023-08-16"
});


export const createPaymentIntent: RequestHandler = async (req:Request, res:Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data:{
          currency:'usd',
          product_data:{
            name:"Therapy Session"
          },
          unit_amount:200
        },
        quantity:1
      },
    ], 
    mode: 'payment',
    success_url: `${API_URL}/client?success=true`,
    cancel_url: `${API_URL}/client?canceled=true`,
  });
  res.status(302).json({message:'Payment Intent Created', url: session.url})
}


