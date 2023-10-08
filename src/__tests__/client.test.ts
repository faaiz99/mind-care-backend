import request from 'supertest'
import { describe, expect, it} from '@jest/globals';
import { httpServer } from '../app.js';
import { afterAll } from '@jest/globals';

afterAll(async()=>{
  // await disconnect()
    httpServer.close()
})


describe('Mind Care Client', () => {
    it('GET /api/v1/client -return 200 OK', async () => {
        const response = await request(httpServer).get('/api/v1/client')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Client')
    })

})


