import dotenv from 'dotenv'
dotenv.config()
import request from 'supertest'

import { test, describe, expect} from '@jest/globals';
const baseUrl = 'http://localhost:8080/api/v1'

// beforeAll(async () => {
//     await connect()
// });

// afterAll(async()=>{
//    await disconnect()
//    listner.close()
// })

describe('Mind Care Client', () => {
    test('GET /api/v1/client', async () => {
        const response = await request(baseUrl).get('/client')
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual('Client')
    })

})


