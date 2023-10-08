import { Schema, model } from 'mongoose';
const overcomingPerfectionismSchema = new Schema({
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
export const overcomingPerfectionismModel = model("overcomingPerfectionism", overcomingPerfectionismSchema);
//# sourceMappingURL=overcomingPerfectionism.model.js.map