import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
import * as paymentService from '../services/payment.service.js';
import { httpServer } from '../app.js';
import { afterAll } from '@jest/globals';
afterAll(async () => {
    httpServer.close();
});
describe('Payment Routes', () => {
    describe('Client Payment Routes', () => {
        it('GET /api/v1/client/payments-clients -return 200 OK', async () => {
            const id = '1';
            const payLoad = {
                status: "success",
                message: "Client Payments Found",
                data: [
                    {
                        _id: "64fdd431e8546f59b4226afd",
                        clientId: "64ece6ba4d227068ea863ee3",
                        sessionCharges: "30.72",
                        currency: "USD",
                        paymentDate: "2023-09-10T14:35:28.921Z",
                        therapistId: null,
                        appointmentId: "64fdd431e8546f59b4226afb",
                        __v: 0
                    }
                ]
            };
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const paymentServiceMock = jest.spyOn(paymentService, 'getPaymentsClient').mockReturnValueOnce(payLoad);
            const { body, statusCode } = await request(httpServer).get(`/api/v1/client/payments-clients/${id}`).send();
            expect(statusCode).toBe(200);
            expect(body.data).toEqual(payLoad);
            expect(paymentServiceMock).toHaveBeenCalled();
        });
        // it('GET /api/v1/client/payments-clients/:id -return 200 OK', async () => {
        // 	const id = '1'
        // 	const { body, statusCode } = await request(httpServer).get(`/api/v1/client/payments-clients/${id}`)
        // 	expect(statusCode).toBe(200)
        // })
        // it('GET /api/v1/client/payments-confirm/:id -return 200 OK', async () => {
        // 	const id = '1'
        // 	const { body, statusCode } = await request(httpServer).get(`/api/v1/client/payments-confirm/${id}`)
        // 	expect(statusCode).toBe(200)
        // })
    });
    // describe('Therapist Payment Routes', () => {
    // 	it('GET /api/v1', async () => {
    // 		const response = await request(httpServer).get('/api/v1/payments')
    // 		expect(response.statusCode).toBe(200)
    // 		expect(response.text).toEqual('Mind Care API')
    // 	})
    // 	it('GET /api/v1/docs', async () => {
    // 		const response = await request(httpServer).get('/docs')
    // 		expect(response.statusCode).toBe(301)
    // 	})
    // })
});
//# sourceMappingURL=payment.test.js.map