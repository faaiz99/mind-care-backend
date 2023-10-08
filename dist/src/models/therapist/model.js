import { Schema, model } from 'mongoose';
const therapistSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: false,
    },
    lastName: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    verifiedAccount: {
        type: Boolean,
        required: false,
    },
    picture: {
        type: String,
        required: false,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
    },
    dateOfAvailability: {
        type: Date,
        required: false,
    },
    timeOfAvailability: {
        type: Date,
        required: false,
    },
    sessionCharges: {
        type: String,
        required: false,
    },
    experience: {
        type: String,
        required: true,
    },
    downloadURL: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
});
export const Therapist = model("therapist", therapistSchema);
//# sourceMappingURL=model.js.map