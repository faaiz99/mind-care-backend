import dotenv from 'dotenv'
dotenv.config()
import request from 'supertest'
import { test, describe, expect} from '@jest/globals';

const baseUrl = 'http://localhost:8080/api/v1'



describe('Mind Care Admin', () => {
    test('GET /api/v1/admin', async () => {
        const response = await request(baseUrl).get('/admin')
        expect(response.statusCode).toBe(401)
        expect(response.text).toEqual('Unauthorized')
    })

})
