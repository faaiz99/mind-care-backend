import { Schema, model } from 'mongoose';
const copingWithGriefSchema = new Schema({
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
export const copingWithGriefModel = model("copingWithGrief", copingWithGriefSchema);
//# sourceMappingURL=copingWithGrief.model.js.map