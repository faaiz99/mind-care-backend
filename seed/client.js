import { Client } from '../src/models/client/client.model.js'
import { faker } from '@faker-js/faker';
import fs from 'fs'

const generateClients = (num) => {
	const client = [];
	for (let i = 0; i < num; i++) {
		let firstName = faker.person.firstName();
		let lastName = faker.person.lastName()
		let email = faker.internet.email({ firstName: firstName, lastName: lastName });
		let gender = faker.person.sex()
		let password = faker.internet.password()
		let picture = faker.internet.avatar()
		let dateofBirth = faker.date.birthdate()
		let createdAt = faker.date.past();
		let verifiedAccount = faker.datatype.boolean(0.5)

		client.push({
			firstName,
			lastName,
			email,
			dateofBirth,
			gender,
			password,
			picture,
			createdAt,
			verifiedAccount,
		});
	}
	return client;
};

var client = generateClients(100);

fs.writeFileSync('client.json', JSON.stringify(client, null, '\t'));
