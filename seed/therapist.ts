
import {Therapist} from '../src/models/therapist/therapist.model.js'
import { faker } from '@faker-js/faker';
import { fs } from 'fs';

const generateTherapists = (num) => {
	const therapist = [];
	const array = ['Therapist', 'Counsellor', 'Psychologist']
	for (let i = 0; i < num; i++) {
		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName()
		const email = faker.internet.email({firstName:firstName, lastName:lastName});
		const gender = faker.person.sex()
		const password = faker.internet.password()
		const picture = faker.internet.avatar()
		const dateofBirth = faker.date.birthdate()
		const createdAt = faker.date.past();
		const dateOfAvailability = faker.date.future()
		const timeOfAvailability = faker.date.future()
		const sessionCharges = faker.commerce.price({ min: 1500, max: 5000 })
		const experience = faker.number.int({ min: 1, max: 15 })
		const specialization = array[Math.floor(Math.random() * array.length)];
		const verifiedAccount = faker.datatype.boolean(0.5)
		const downloadURL = faker.internet.url()

		therapist.push({
			firstName,
			lastName,
			email,
			dateofBirth,
			gender,
			password,
			picture,
			createdAt,
			dateOfAvailability,
			sessionCharges,
			timeOfAvailability,
			experience,
			specialization,
			verifiedAccount,
			downloadURL
		});
	}
	return therapist;
};

const therapist = generateTherapists(100);
//therapist = JSON.stringify(therapist, null, '\t')

//console.log(typeof therapist)

fs.writeFileSync('therapist.json', JSON.stringify(therapist, null, '\t'));

// const seedData = async () => {

// 	fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

// 	result = await Therapist.insertMany(therapist)
// 	console.log('done', result)
// }

// seedData()