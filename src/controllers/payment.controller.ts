import Stripe from 'stripe';
import dotenv from 'dotenv'
const SECRET_KEY : string | undefined = dotenv?.config()?.parsed?.SECRET_KEY ?? ''

const stripe = new Stripe(SECRET_KEY, {
  apiVersion: "2023-08-16"
});


// stripe.accountLinks.create({

// })