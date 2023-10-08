import Stripe from 'stripe';
const SECRET_STRIPE: string | undefined = process.env.SECRET_STRIPE ?? 'NO_SECRET'
export const API_URL: string | undefined = process.env.API_URL ?? 'NO-API-URL'
export const stripe = new Stripe(SECRET_STRIPE, {
  apiVersion: "2023-08-16"
});