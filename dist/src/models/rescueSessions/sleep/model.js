import { Schema, model } from 'mongoose';
const sleepSchema = new Schema({
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
            type: String,
            required: true
        }],
    listened: {
        type: Boolean,
        required: true
    }
});
export const Sleep = model("sleep", sleepSchema);
//# sourceMappingURL=model.js.map