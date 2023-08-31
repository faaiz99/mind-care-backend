
import request from 'supertest'
import { test, describe, expect} from '@jest/globals';

const baseUrl = 'http://localhost:8080/api/v1/admin'

describe('Mind Care Admin', () => {
    test('GET /api/v1/admin', async () => {
        const response = await request(baseUrl).get('/')
        expect(response.statusCode).toBe(401)
        expect(response.text).toEqual('Unauthorized')
    })
    test('GET /api/v1/admin/login', async () => {
        const payload = {"email":"faaiz@live.com", "password":"123"}
        const response = await request(baseUrl).post('/login').send({payload})
        expect(response.statusCode).toBe(200)
    })

})
