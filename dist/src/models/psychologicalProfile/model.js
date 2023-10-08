import { Schema, model } from 'mongoose';
const psychologicalProfileSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
    profile: [{
            checkinDate: {
                type: Date,
            },
            emotion: {
                type: String,
                required: true,
            },
            specificEmotion: {
                type: String,
                required: true,
            },
            reasonOfEmotion: {
                type: String,
                required: true,
            },
            elaborationText: {
                type: String,
                required: true,
            },
            stressTimeline: {
                type: String,
                required: true,
            },
        }],
    depressionTest: {
        type: Schema.Types.ObjectId,
        ref: 'beckDepression',
        required: false,
    },
    anxietyTest: {
        type: Schema.Types.ObjectId,
        ref: 'beckAnxiety',
        required: false,
    },
    depressionTestTime: {
        type: Date,
        required: false,
    },
    anxietyTestTime: {
        type: Date,
        required: false,
    },
    depressionTestEnabled: {
        type: Boolean,
        required: false,
    },
    anxietyTestEnabled: {
        type: Boolean,
        required: false,
    }
});
export const psychologicalProfile = model("psychologicalProfile", psychologicalProfileSchema);
//# sourceMappingURL=model.js.map