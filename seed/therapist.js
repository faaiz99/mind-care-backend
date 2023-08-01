
import {Therapist} from '../src/models/therapist/therapist.model.js'
import { faker } from '@faker-js/faker';
import { fs } from 'fs';

const generateTherapists = (num) => {
	const therapist = [];
	const array = ['Therapist', 'Counsellor', 'Psychologist']
	for (let i = 0; i < num; i++) {
		let firstName = faker.person.firstName();
		let lastName = faker.person.lastName()
		let email = faker.internet.email({firstName:firstName, lastName:lastName});
		let gender = faker.person.sex()
		let password = faker.internet.password()
		let picture = faker.internet.avatar()
		let dateofBirth = faker.date.birthdate()
		let createdAt = faker.date.past();
		let dateOfAvailability = faker.date.future()
		let timeOfAvailability = faker.date.future()
		let sessionCharges = faker.commerce.price({ min: 1500, max: 5000 })
		let experience = faker.number.int({ min: 1, max: 15 })
		let specialization = array[Math.floor(Math.random() * array.length)];
		let verifiedAccount = faker.datatype.boolean(0.5)
		let downloadURL = faker.internet.url()

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

var therapist = generateTherapists(100);
//therapist = JSON.stringify(therapist, null, '\t')

//console.log(typeof therapist)

fs.writeFileSync('therapist.json', JSON.stringify(therapist, null, '\t'));

// const seedData = async () => {

// 	fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));

// 	result = await Therapist.insertMany(therapist)
// 	console.log('done', result)
// }

// seedData()