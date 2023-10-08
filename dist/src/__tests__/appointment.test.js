import { describe, it } from '@jest/globals';
const baseUrl = 'http://localhost:8080/api/v1';
describe('Appointment Routes', () => {
    describe('Client Appointments', () => {
        it('', () => {
            const payload = {
                "clientId": "646b269982231adacdfc4bfe",
                "therapistId": "646b2ba3611c2105ed854019",
                "appointmentDate": "2024-02-13T08:36:49.340+00:00",
                "appointmentCharges": "5000",
                "appointmentTime": "2024-02-13T08:36:49.340+00:00",
                "problemDescription": "I'm feeling depressed",
                "status": "pending"
            };
            const response = {
                "status": "success",
                "message": "Appointment created",
                "data": {
                    "therapistId": "646b2ba3611c2105ed854019",
                    "clientId": "646b269982231adacdfc4bfe",
                    "appointmentDate": "2024-02-13T08:36:49.340Z",
                    "appointmentTime": "2024-02-13T08:36:49.340Z",
                    "appointmentCharges": "5000",
                    "problemDescription": "I'm feeling depressed",
                    "status": "pending",
                    "_id": "64f6c4261b256dedb59160eb",
                    "__v": 0
                }
            };
        });
    });
    describe('Therapist Appointments', () => {
    });
});
//# sourceMappingURL=appointment.test.js.map