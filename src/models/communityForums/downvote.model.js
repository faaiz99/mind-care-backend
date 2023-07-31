const mongoose = require('mongoose')
const Schema = require("mongoose").Schema

const downvoteSchema = new Schema({
	downvoteId: {
		type: mongoose.Schema.Types.ObjectId
	},
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'client',
		required: false
	},
	therapistId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'therapist',
		required: false
	},
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'post',
		required: false
	},
	commentId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'comment',
		required: false
	},
})

const downvote = mongoose.model('downvote', downvoteSchema)
module.exports = downvote