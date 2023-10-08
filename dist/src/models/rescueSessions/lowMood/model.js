import { Schema, model } from 'mongoose';
const lowMoodSchema = new Schema({
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
export const LowMood = model("lowMood", lowMoodSchema);
//# sourceMappingURL=model.js.map