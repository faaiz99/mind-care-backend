import { Schema, model, Types } from 'mongoose';
const appointmentSchema = new Schema({
    therapistId: {
        type: Types.ObjectId,
        ref: 'therapist'
    },
    clientId: {
        type: Types.ObjectId,
        ref: 'client'
    },
    appointmentDate: {
        type: Date,
    },
    appointmentTime: {
        type: Date,
    },
    appointmentCharges: {
        type: String,
    },
    problemDescription: {
        type: String,
    },
    status: {
        type: String,
    },
    feedback: {
        type: String,
        required: false
    },
    therapistReview: {
        review: {
            type: String,
            required: false
        },
        rating: {
            type: Number,
            max: 5,
            min: 1,
            required: false
        }
    }
});
export const Appointment = model("appointment", appointmentSchema);
//# sourceMappingURL=model.js.map