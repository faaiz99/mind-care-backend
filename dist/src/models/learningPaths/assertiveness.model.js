import { Schema, model } from 'mongoose';
const assertivenessSchema = new Schema({
    questions: {
        type: String,
    },
    results: {
        type: String,
    },
    content: {
        type: String,
    },
    audio: {
        type: String,
    },
});
export const assertivenessModel = model("assertiveness", assertivenessSchema);
//# sourceMappingURL=assertiveness.model.js.map