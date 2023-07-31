const mongoose = require('mongoose')
const Schema = require("mongoose").Schema

const upvoteSchema = new Schema({
	upvoteId:{
		type:mongoose.Schema.Types.ObjectId
	},
	clientId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'client'
	},
	therapistId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'therapist'
	},
	postId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'post'
	},
	commentId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'comment'
	},
})

const upvote = mongoose.model('upvote', upvoteSchema)
module.exports = upvote