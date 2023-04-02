const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const therapistSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		unique: false
	},
	lastName: {
		type: String,
		required: true,
		unique: false
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	gender: {
		type:String,
		required:true,
	},
	role:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	verifiedAccount:{
		type:Boolean,
		required:false
	},
	profilePicture:{
		type:String,
		required:false
	},
	dateofBirth:{
		type: Date,
		required:true
	}
});

const therapistModel = mongoose.model('therapist',therapistSchema)
module.exports = therapistModel;