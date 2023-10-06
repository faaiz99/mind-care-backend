import request from 'supertest'
import {describe, expect, it } from '@jest/globals';
import { httpServer } from '../app.ts';

beforeAll(async () => {
    //await connect()
});


afterAll(async()=>{
   //await disconnect()
    httpServer.close()
})


describe('Mind Care Backend', () => {
    describe('Entry Point',()=>{
        it('GET /api/v1', async () => {
            const response = await request(httpServer).get('/api/v1')
            expect(response.statusCode).toBe(200)
            expect(response.text).toEqual('Mind Care API')
        })
        it('GET /api/v1/docs', async ()=>{
            const response = await request(httpServer).get('/api/v1/docs')
            expect(response.statusCode).toBe(301)
        })
    })
   
})


