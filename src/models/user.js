const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
		unique: false,
	},
	role:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});

const userModel = mongoose.model('user',userSchema)
module.exports = userModel;