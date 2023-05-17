const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const paymentModel = mongoose.model("payment", paymentSchema);
module.exports = paymentModel;
