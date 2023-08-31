import dotenv from 'dotenv'
dotenv.config()
import request from 'supertest'
import { listner } from '../../app.ts';
import { connect, disconnect } from '../config/db.config.ts';
import { test, describe, expect, beforeAll, afterAll } from '@jest/globals';
const baseUrl = 'http://localhost:8080/api/v1'

beforeAll(async () => {
    await connect()
});

afterAll(async()=>{
   await disconnect()
   listner.close()
})

describe('Mind Care Backend', () => {
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


