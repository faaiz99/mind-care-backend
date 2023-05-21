const Therapist = require('../src/models/therapist')
const faker = require('faker');
const generateTherapists = (num) => {
	const therapist = [];
  
	for (let i = 0; i < num; i++) {
	  const firstName = faker.name.firstName();
	  const lastName = faker.name.lastName()
	  const email = faker.name.email()
	  const reviews = faker.lorem.sentences(3);
	  const location = faker.lorem.sentences(1);
	  const password = faker.datatype.number();
	  const email = faker.internet.email();
	  const category = faker.commerce.department();
	  const createdAt = faker.date.past();
  
	  therapist.push({
		fullName,
		reviews,
		category,
		ratings,
		password,
		category,
		email,
		location,
		createdAt,
	  });
	}
  
	return therapist;
  };

  const therapist = generateTherapists(50);

  const seedData = async ()=>{
	await Therapist.insertMany(therapist)
  }
  
  seedData()