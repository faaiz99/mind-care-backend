"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
var fs = require("fs");
var generateClients = function (num) {
    var client = [];
    for (var i = 0; i < num; i++) {
        var firstName = faker_1.faker.person.firstName();
        var lastName = faker_1.faker.person.lastName();
        var email = faker_1.faker.internet.email({ firstName: firstName, lastName: lastName });
        var gender = faker_1.faker.person.sex();
        var password = faker_1.faker.internet.password();
        var picture = faker_1.faker.internet.avatar();
        var dateofBirth = faker_1.faker.date.birthdate();
        var createdAt = faker_1.faker.date.past();
        var verifiedAccount = faker_1.faker.datatype.boolean(0.5);
        var openJournalId = faker_1.faker.database.mongodbObjectId();
        client.push({
            firstName: firstName,
            lastName: lastName,
            email: email,
            dateofBirth: dateofBirth,
            gender: gender,
            password: password,
            picture: picture,
            createdAt: createdAt,
            verifiedAccount: verifiedAccount,
            openJournalId: openJournalId
        });
    }
    return client;
};
var client = generateClients(100);
fs.writeFileSync('client.json', JSON.stringify(client, null, '\t'));
