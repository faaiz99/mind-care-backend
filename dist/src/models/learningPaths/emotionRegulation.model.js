import { Schema, model } from 'mongoose';
const emotionRegulationSchema = new Schema({
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
export const emotionRegulation = model("emotionRegulation", emotionRegulationSchema);
//# sourceMappingURL=emotionRegulation.model.js.map