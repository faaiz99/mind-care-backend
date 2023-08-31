import dotenv from 'dotenv'
dotenv.config()
import request from 'supertest'
import { test, describe, expect } from '@jest/globals';

const baseUrl = 'http://localhost:8080/api/v1'

describe('Mind Care Therapist', () => {
    test('GET /api/v1/therapist', async () => {
        const response = await request(baseUrl).get('/therapist')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Therapist')
    })

})
