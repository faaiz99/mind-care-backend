import { Schema, model } from 'mongoose';
const managingFeelingsOfAngerSchema = new Schema({
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
export const managingFeelingsOfAngerModel = model("managingFeelingsOfAnger", managingFeelingsOfAngerSchema);
//# sourceMappingURL=managingFeelingsOfAnger.model.js.map