import {Schema, model, Types } from 'mongoose'

const postSchema = new Schema({
  postId: {
    type: Types.ObjectId,
  },
  clientId: {
    type: Types.ObjectId,
    ref: 'client',
    required:false
  },
  therapistId: {
    type: Types.ObjectId,
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
    type:Types.ObjectId,
    ref:'comment'
  }],
  upvotes:[{
    type:ypes.ObjectId,
    ref:'upvote'
  }],
  downvotes:[{
    type:Types.ObjectId,
    ref:'downvote'
  }]
});

export const post = model("post", postSchema);
