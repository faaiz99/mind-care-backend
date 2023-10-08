import { Schema, model } from 'mongoose';
const BeckDepressionSchema = new Schema({
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
export const beckDepression = model("beckDepression", BeckDepressionSchema);
//# sourceMappingURL=model.js.map