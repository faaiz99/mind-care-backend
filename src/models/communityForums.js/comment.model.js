const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentId: {
    type: mongoose.Types.ObjectId,
  },
  commentBody: {
    type: String,
  },
  commentTag: {
    type: String,
  },
  numberOfUpvotes: {
    type: Number,
  },
  numberOfDownvotes: {
    type: Number,
  },
  numberOfReplies: {
    type: Number,
  },
  postId: {
    type: mongoose.Types.ObjectId,
    ref: postId,
  },
});

const commentModel = mongoose.model("comment", commentSchema);
module.exports = commentModel;
