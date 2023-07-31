const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const client = require('../client/client.model')

const postSchema = new Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client',
    required:false
  },
  therapistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'therapist',
    required:false
  },
  pictureLink: {
    type: String,
    required:false
  },
  title:{
    type:String,
    required:true
  },
  body: {
    type: String,
    required:true
  },
  tags: [{ 
    type: String, 
    required: true 
  }],
  comments:[{
    type:mongoose.Types.ObjectId,
    ref:'comment'
  }],
  upvotes:[{
    type:mongoose.Types.ObjectId,
    ref:'upvote'
  }],
  downvotes:[{
    type:mongoose.Types.ObjectId,
    ref:'downvote'
  }]
});

const post = mongoose.model("post", postSchema);
module.exports = post;
