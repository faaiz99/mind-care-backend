const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  postId: {
    type: mongoose.Types.ObjectId,
  },
  postBody: {
    type: String,
  },
  postTag: {
    type: String,
  },
  numberOfUpvotes: {
    type: Number,
  },
  numberOfDownvotes: {
    type: Number,
  },
  numberOfComments: {
    type: Number,
  },
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
