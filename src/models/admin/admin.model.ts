import {Schema, model} from 'mongoose'

const adminSchema = new Schema({
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
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	verifiedAccount: {
		type: Boolean,
		required: false
	},
	profilePicture: {
		type: String,
		required: false
	},
	dateofBirth: {
		type: Date,
		required: false
	}
});

export const Admin = model('admin', adminSchema)
