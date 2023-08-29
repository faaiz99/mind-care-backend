import { Schema, model, Types } from 'mongoose'

const paymentSchema = new Schema({
  client: {
    type: Types.ObjectId,
    ref: 'client',
    required: true
  },
  payments: [{
    sessionCharges: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    therapistId: {
      type: Types.ObjectId,
      ref: 'therapist',
      required: true
    }
  }]
});

export const paymentModel = model("payment", paymentSchema);