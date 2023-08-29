import Stripe from 'stripe';
import dotenv from 'dotenv'
const SECRET_STRIPE: string | undefined = dotenv?.config()?.parsed?.SECRET_STRIPE ?? ''
export const API_URL: string | undefined = dotenv?.config()?.parsed?.API_URL ?? ''
export const stripe = new Stripe(SECRET_STRIPE, {
  apiVersion: "2023-08-16"
});