import { Schema, model, Types } from 'mongoose';
const buildingASelfCarePlanSchema = new Schema({
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
export const BuildingASelfCarePlan = model("buildingASelfCarePlan", buildingASelfCarePlanSchema);
//# sourceMappingURL=model.js.map