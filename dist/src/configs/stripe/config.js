import Stripe from 'stripe';
import dotenv from 'dotenv';
const SECRET_STRIPE = dotenv?.config()?.parsed?.SECRET_STRIPE ?? '';
export const API_URL = dotenv?.config()?.parsed?.API_URL ?? '';
export const stripe = new Stripe(SECRET_STRIPE, {
    apiVersion: "2023-08-16"
});
//# sourceMappingURL=config.js.map