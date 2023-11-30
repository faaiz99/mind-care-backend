import Stripe from "stripe";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const SECRET_STRIPE: string | undefined =
  process.env.SECRET_STRIPE ?? dotenv.config().parsed?.SECRET_STRIPE;
export const MOBILE_URL: string | undefined =
  process.env.MOBILE_URL ?? dotenv.config().parsed?.MOBILE_URL;

if (!SECRET_STRIPE) {
  throw new Error("SECRET_STRIPE is not defined");
}

export const stripe = new Stripe(SECRET_STRIPE, {
  apiVersion: "2023-10-16",
});
