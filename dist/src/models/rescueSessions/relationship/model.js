import { Schema, model } from 'mongoose';
const relationshipSchema = new Schema({
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
export const Relationship = model("relationship", relationshipSchema);
//# sourceMappingURL=model.js.map