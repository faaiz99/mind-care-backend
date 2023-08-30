/* eslint-disable @typescript-eslint/no-unused-vars */

import dotenv from 'dotenv'

dotenv.config()
import request from 'supertest'
import app from '../../app.ts'
import { listner } from '../../app.ts';
import { test, describe, expect, afterAll } from '@jest/globals';
import { disconnect, connect } from '../config/db.config.ts';
// import {describe, expect, test} from 'jest'
const { PORT } = process.env;
//const baseUrl: string = '/api/v1'
const baseUrl = 'http://localhost:8080/api/v1'

beforeAll(async () => {
    await connect()
});

afterAll(async () => {

    await disconnect()
    listner.close()
})

describe('Mind Care Backend', () => {
    test('GET /api/v1', async () => {
        const response = await request(baseUrl).get('/')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Mind Care API')
    })
    test('GET /api/v1/client', async () => {
        const response = await request(baseUrl).get('/client')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Client')
    })
    test('GET /api/v1/therapist', async () => {
        const response = await request(baseUrl).get('/therapist')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Therapist')
    })
    test('GET /api/v1/admin', async () => {
        const response = await request(baseUrl).get('/admin')
        expect(response.statusCode).toBe(401)
        expect(response.text).toEqual('Unauthorized')
    })
    
    
})


