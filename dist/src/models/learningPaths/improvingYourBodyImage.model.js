import { Schema, model } from 'mongoose';
const improvingYourBodyImageSchema = new Schema({
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
export const improvingYourBodyImage = model("improvingYourBodyImage", improvingYourBodyImageSchema);
//# sourceMappingURL=improvingYourBodyImage.model.js.map