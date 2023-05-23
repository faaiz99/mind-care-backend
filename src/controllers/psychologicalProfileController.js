const MentalWellbeingHistory = require('../models/mentalWellbeingHistory')
const Client = require('../models/client')


exports.buildPsychologicalProfile = async (req, res) => {
	const filter = { clientId: req.body.clientId }
	var profile = req.body
	let options = { upsert: true, new: true, setDefaultsOnInsert: true };
	var result;
	try {
		result = await MentalWellbeingHistory.findOneAndUpdate(filter, profile, options)
	} catch (error) {
		console.log('Psychological Profile Built error', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Profile Build', result })

}

exports.setTestScore = async (req, res) => {
	const filter = { clientId: req.body.clientId }
	var profile = req.body
	let options = { upsert: true, new: true, setDefaultsOnInsert: true };
	var result;
	try {
		result = await MentalWellbeingHistory.findOneAndUpdate(filter, profile, options)
	} catch (error) {
		console.log('Cannot update psychological test score', error)
		next(error)
	}
	res.json({ status: 200, message: 'Psychological Test Scores upadated', result })

}

exports.getPsychologicalProfile = async (req, res) => {
	const filter = { clientId: req.body.clientId }
	try {

	} catch (error) {

	}
	res.json({})

}