
import { Client } from "../dist/src/models/client/model.js"
// import { ITherapist } from '../src/types/ITherapist.js'
import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import { Types } from "mongoose";


const generateTherapists = (num) => {
	const client = [];
	for (let i = 0; i < num; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName()
		const email = faker.internet.email({ firstName: firstName, lastName: lastName });
		const gender = faker.person.sex()
		const password = faker.internet.password()
		const picturePicture = faker.internet.avatar()
		const dateOfBirth = faker.date.birthdate()
		const createdAt = faker.date.past();
		const verifiedAccount = faker.datatype.boolean(0.5)
		const downloadURL = faker.internet.url()
		const violation = faker.lorem.sentence()
		const isBlocked = faker.datatype.boolean(0)
		const reInstatement = faker.number.int({ min: 0, max: 0 })

		const newClient = {
			firstName,
			lastName,
			email,
			dateOfBirth,
			gender,
			password,
			picturePicture,
			createdAt,
			verifiedAccount,
			downloadURL,
			violation,
			isBlocked,
			reInstatement, 
			_id: {$oid:new Types.ObjectId()}
		  };
		  client.push(newClient);
		}
		return client;
};

const client = generateTherapists(10);
//therapist = JSON.stringify(therapist, null, '\t')

//console.log(typeof therapist)

fs.writeFileSync('client.json', JSON.stringify(client, null, '\t'));

// const seedData = async () => {

// 	fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

// 	result = await Therapist.insertMany(therapist)
// 	console.log('done', result)
// }

// seedData()