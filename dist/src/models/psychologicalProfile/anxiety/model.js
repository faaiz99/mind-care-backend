import { Schema, model } from 'mongoose';
const BeckAnxietySchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'client',
        required: true,
    },
    responses: [
        {
            questionNumber: {
                type: Number,
                required: true,
            },
            response: {
                type: Number,
                enum: [0, 1, 2, 3],
                required: true,
            },
        },
    ],
    score: {
        type: Number,
        required: true
    }
});
export const beckAnxiety = model("beckAnxiety", BeckAnxietySchema);
//# sourceMappingURL=model.js.map