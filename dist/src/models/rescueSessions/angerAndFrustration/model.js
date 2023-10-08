import { Schema, model } from 'mongoose';
const angerAndFrustrationSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    questions: [{
            type: String,
            required: true
        }],
    results: [{
            type: String, required: true
        }],
    listened: {
        type: Boolean,
        required: true
    }
});
export const AngerAndFrustration = model("angerAndFrustration", angerAndFrustrationSchema);
//# sourceMappingURL=model.js.map