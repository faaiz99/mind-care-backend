import { Request, Response,RequestHandler, NextFunction } from 'express'
import  {psychologicalProfile} from '../models/psychologicalProfile/psychologicalProfile.model.ts'
export const buildPsychologicalProfile:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
	const filter = { clientId: req.body.clientId }
	const profile = req.body
	const options = { upsert: true, new: true, setDefaultsOnInsert: true };
	let result;
	try {
		result = await psychologicalProfile.findOneAndUpdate(filter, profile, options)
	} catch (error) {
		console.log('Psychological Profile Built error', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Profile Build', result })

}
export const setTestScore:RequestHandler= async (req:Request, res:Response, next:NextFunction) => {
	const filter = { clientId: req.body.clientId }
	const profile = req.body
	const options = { upsert: true, new: true, setDefaultsOnInsert: true };
	let result;
	try {
		result = await psychologicalProfile.findOneAndUpdate(filter, profile, options)
	} catch (error) {
		console.log('Cannot update psychological test score', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Test Scores upadated', result })

}

export const getPsychologicalProfile:RequestHandler = async (req:Request, res:Response, next:NextFunction) => {
	const filter = { clientId: req.body.clientId }
	let result;
	try {
		result = await psychologicalProfile.findOne(filter)
	} catch (error) {
		console.log('Cannot find psychological profile', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Profile found', result })

}