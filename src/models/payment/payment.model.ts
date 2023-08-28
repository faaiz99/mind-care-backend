import { Schema, model } from 'mongoose'

const paymentSchema = new Schema({
  paymentCard: [
    {
      cardNumber: {
        type: String,
        required: true,
      },
      cvc: {
        type: String,
        required: true,
      },
      expiryDate: {
        type: Date,
        required: true,
      },
      cardHolderName: {
        type: String,
        required: true,
      },
    },
  ],
});

export const paymentModel = model("payment", paymentSchema);

