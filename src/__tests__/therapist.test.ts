import request from 'supertest'
import {  describe, expect, it} from '@jest/globals';
import { httpServer } from '../../app.ts';
import { disconnect, connect } from '../configs/db/config.ts';

beforeAll(async () => {
    await connect()
});


afterAll(async()=>{
   await disconnect()
    httpServer.close()
})


describe('Mind Care Therapist', () => {
    it('GET /api/v1/therapist', async () => {
        const response = await request(httpServer).get('/api/v1/therapist')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Therapist')
    })

})
