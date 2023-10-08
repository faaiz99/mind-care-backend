import { Schema, model } from 'mongoose';
const feelingDepressedSchema = new Schema({
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
export const feelingDepressed = model("feelingDepressed", feelingDepressedSchema);
//# sourceMappingURL=feelingDepressed.model.js.map