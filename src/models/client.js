const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const clientSchema = new Schema({
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
	loggedIn:{
		type:Boolean,
		required:false
	}
});

const clientModel = mongoose.model('client',clientSchema)
module.exports = clientModel;