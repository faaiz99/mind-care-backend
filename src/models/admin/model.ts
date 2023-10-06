import {Schema, model, Model} from 'mongoose'
import { IAdmin } from '../../types/IAdmin.js';
const adminSchema = new Schema<IAdmin>({
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
	dateOfBirth: {
		type: Date,
		required: false,
	},
});

export const Admin:Model<IAdmin> = model<IAdmin>('admin', adminSchema)
