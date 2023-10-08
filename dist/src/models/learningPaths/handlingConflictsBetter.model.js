import { Schema, model } from 'mongoose';
const handlingConflictsBetterSchema = new Schema({
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
export const handlingConflictsBetter = model("handlingConflictsBetter", handlingConflictsBetterSchema);
//# sourceMappingURL=handlingConflictsBetter.model.js.map