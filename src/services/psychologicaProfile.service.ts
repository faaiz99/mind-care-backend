/* eslint-disable @typescript-eslint/no-explicit-any */
import { psychologicalProfile } from '../models/psychologicalProfile/psychologicalProfile.model.ts'
import { beckDepression } from '../models/psychologicalProfile/depression.model.ts';
import { beckAnxiety } from '../models/psychologicalProfile/anxiety.model.ts';

export const buildPsychologicalProfile = async (id: string, psychologicalProfile: any) => {
	const filter = { clientId: id }
	const options = { upsert: true, new: true, setDefaultsOnInsert: true };
	const response = await psychologicalProfile.findOneAndUpdate(filter, psychologicalProfile, options)
	if (!response)
		throw new Error('Psychological Profile Could not be Built')
	return response
}

export const setTestScore = async (id: string, psychologicalProfile: any) => {
	const filter = { clientId: id}
	const options = { upsert: true, new: true, setDefaultsOnInsert: true };
	const response = await psychologicalProfile.findOneAndUpdate(filter, psychologicalProfile, options)
	if(!response)
		throw new Error ('Psychprofile Score Could not be Set')
	return response
}

export const getPsychologicalProfile = async (id:string) => {
	const filter = { clientId: id }
	const response = await psychologicalProfile.findOne(filter)
	if(!response)
		throw new Error('Psychological Profile not Found')
	return response
}

export const saveDepressionTest = async (id:string, beckDepressionTest:any) => {
	const response = await beckDepression.create({
		clientId:id,
		...beckDepressionTest
	})
	if(!response)
		throw new Error ('Depression Test Could not be Saved')
	return response
}

export const saveAnxietyTest = async (id:string, beckAnxietyTest:any) => {
	const response = await beckAnxiety.create({
		clientId:id,
		...beckAnxietyTest
	})
	if(!response)
		throw new Error('Anxiety Test Could not be Saved')
	return response
}

export const getDepressionTest = async (id:string)=>{
	const response = await beckDepression.findOne({
		clientId:id
	})
	if(!response)
		throw new Error ('Depression Test Could not be Found')
	return response
}

export const getAnxietyTest = async (id:string)=>{
	const response = await beckAnxiety.findOne({
		clientId:id
	})
	if(!response)
		throw new Error ('Anxiety Test Could not be Found')
	return response
}