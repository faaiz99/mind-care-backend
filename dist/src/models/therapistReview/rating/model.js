import { Schema, model } from 'mongoose';
const ratingSchema = new Schema({
    numberOfStars: {
        type: Number,
    },
});
export const ratingModel = model("rating", ratingSchema);
//# sourceMappingURL=model.js.map