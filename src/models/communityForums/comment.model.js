const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentId: {
    type: mongoose.Types.ObjectId,
  },
  postId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'post',
    required:true
  },
  therapistId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'therapist',
    required:false

  },
  clientId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'client',
    required:false
  },
  parentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'comment',
    required:false
  },
  body: {
    type: String,
    required:true
  },
  children:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'comment',
    required:false
  }],
  upvotes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'upvote',
    required:false
  }],
  downvotes:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'downvote',
    required:false
  }],
});

const comment = mongoose.model("comment", commentSchema);
module.exports = comment;
