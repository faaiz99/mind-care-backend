import { Schema, model, Model } from "mongoose";
import { IRating } from "../../../types/ITherapistReview.js";

const ratingSchema = new Schema<IRating>({
  numberOfStars: {
    type: Number,
  },
});

export const RatingModel: Model<IRating> = model("Rating", ratingSchema);
