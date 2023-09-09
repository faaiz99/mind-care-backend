import { faker } from '@faker-js/faker';
import * as fs from 'fs'


interface Client {
	firstName: string
	lastName: string
	email: string
	gender: string
	password: string
	picture: string
	dateofBirth: Date
	createdAt: Date
	verifiedAccount: boolean
	openJournalId: Array<string>
}

const generateClients = (num: number) => {

	const client: Array<Client> = [];
	const id: string = faker.database.mongodbObjectId()
	interface T {
		id: string
	}
	const ids: Array<T> = [{ id: id }]
	for (let i = 0; i < num; i++) {
		const firstName: string = faker.person.firstName();
		const lastName: string = faker.person.lastName()
		const email: string = faker.internet.email({ firstName: firstName, lastName: lastName });
		const gender: string = faker.person.sex()
		const password: string = faker.internet.password()
		const picture: string = faker.internet.avatar()
		const dateofBirth: Date = faker.date.birthdate()
		const createdAt: Date = faker.date.past();
		const verifiedAccount: boolean = faker.datatype.boolean(0.5)
		const openJournalId: Array<string> = [
			faker.helpers.arrayElement(ids as unknown as string[]),
			faker.helpers.arrayElement(ids as unknown as string[]),
			faker.helpers.arrayElement(ids as unknown as string[])
		]


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
			openJournalId
		});
	}
	return client;
};

const client = generateClients(100);

fs.writeFileSync('client.json', JSON.stringify(client, null, '\t'));
