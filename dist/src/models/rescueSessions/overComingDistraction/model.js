import { Schema, model } from 'mongoose';
const overcomingDistractionsSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    questions: [{
            type: String, required: true
        }],
    results: [{
            type: String, required: true
        }],
    listened: {
        type: Boolean,
        required: true
    }
});
export const OverComingDistractions = model("overcomingDistractions", overcomingDistractionsSchema);
//# sourceMappingURL=model.js.map