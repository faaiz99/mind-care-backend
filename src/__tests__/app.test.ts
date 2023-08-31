import request from 'supertest'
import { test, describe, expect } from '@jest/globals';
const baseUrl = 'http://localhost:8080/api/v1'



describe('Mind Care Backend', () => {
    describe('Entry Point',()=>{
        test('GET /api/v1', async () => {
            const response = await request(baseUrl).get('/')
            expect(response.statusCode).toBe(200)
            expect(response.text).toEqual('Mind Care API')
        })
        test('GET /api/v1/docs', async ()=>{
            const response = await request(baseUrl).get('/docs')
            expect(response.statusCode).toBe(301)
        })
    })
   
})


