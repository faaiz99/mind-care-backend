const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  numberOfStars: {
    type: Number,
  },
});

const ratingModel = mongoose.model("rating", ratingSchema);
module.exports = ratingModel;
