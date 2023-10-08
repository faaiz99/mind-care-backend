import { Schema, model, Types } from 'mongoose';
const planningthedayAheadSchema = new Schema({
    clientId: {
        type: Types.ObjectId,
        ref: 'client'
    },
    questions: {
        type: [String],
    },
    answers: {
        type: [String],
    },
    createdAt: {
        type: Date
    }
});
export const PlanningTheDayAhead = model("planningTheDayAhead", planningthedayAheadSchema);
//# sourceMappingURL=model.js.map