import {Schema, model, Types } from 'mongoose'


const commentSchema = new Schema({
  commentId: {
    type: Types.ObjectIdId,
  },
  postId:{
    type:Types.ObjectId,
    ref:'post',
    required:true
  },
  therapistId:{
    type:Types.ObjectId,
    ref:'therapist',
    required:false

  },
  clientId:{
    type:Types.ObjectId,
    ref:'client',
    required:false
  },
  parentId:{
    type:Types.ObjectId,
    ref:'comment',
    required:false
  },
  body: {
    type: String,
    required:true
  },
  children:[{
    type:Types.ObjectId,
    ref:'comment',
    required:false
  }],
  upvotes:[{
    type:Types.ObjectId,
    ref:'upvote',
    required:false
  }],
  downvotes:[{
    type:Types.ObjectId,
    ref:'downvote',
    required:false
  }],
});

export const comment = model("comment", commentSchema);
