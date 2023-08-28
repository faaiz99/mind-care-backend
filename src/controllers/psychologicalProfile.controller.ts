import  {psychologicalProfile} from '../models/psychologicalProfile/psychologicalProfile.model.ts'
export const buildPsychologicalProfile = async (req, res,next) => {
	const filter = { clientId: req.body.clientId }
	var profile = req.body
	let options = { upsert: true, new: true, setDefaultsOnInsert: true };
	var result;
	try {
		result = await psychologicalProfile.findOneAndUpdate(filter, profile, options)
	} catch (error) {
		console.log('Psychological Profile Built error', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Profile Build', result })

}
export const setTestScore = async (req, res,next) => {
	const filter = { clientId: req.body.clientId }
	var profile = req.body
	let options = { upsert: true, new: true, setDefaultsOnInsert: true };
	var result;
	try {
		result = await psychologicalProfile.findOneAndUpdate(filter, profile, options)
	} catch (error) {
		console.log('Cannot update psychological test score', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Test Scores upadated', result })

}

export const getPsychologicalProfile = async (req, res,next) => {
	const filter = { clientId: req.body.clientId }
	var result;
	try {
		result = await psychologicalProfile.findOne(filter)
	} catch (error) {
		console.log('Cannot find psychological profile', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Profile found', result })

}