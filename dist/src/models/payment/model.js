import { Schema, model } from 'mongoose';
const paymentSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'client',
        required: true
    },
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
        type: Schema.Types.ObjectId,
        ref: 'therapist',
        required: true
    },
    appointmentId: {
        type: Schema.Types.ObjectId,
        ref: 'appointment',
        required: true
    }
});
export const Payment = model("payment", paymentSchema);
//# sourceMappingURL=model.js.map