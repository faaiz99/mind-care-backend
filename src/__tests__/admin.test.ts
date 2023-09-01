
import request from 'supertest'
import { describe, expect, it } from '@jest/globals';
import * as adminService from '../services/admin.service.ts'

const baseUrl = 'http://localhost:8080/api/v1/admin'

describe('Mind Care Admin', () => {
    describe('Admin Home Page', () => {
        it('GET /api/v1/admin', async () => {
            const response = await request(baseUrl).get('/')
            expect(response.statusCode).toBe(401)
            expect(response.text).toEqual('Unauthorized')
        })
    })
    describe('Admin Login', () => {
        it.only('POST /api/v1/admin/login - return 200', async () => {
            const userInput = {
                "email": "admin@mindcare.com",
                "password": "123"
            }

            const userPayload = {
                status: "success",
                accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZWNhOTkwMTUwZjZhMzlhZDc3NDNjOCIsImVtYWlsIjoiYWRtaW5AbWluZGNhcmUuY29tIiwicGFzc3dvcmQiOiIxMjMifSwiaWF0IjoxNjkzNTA1ODI3LCJleHAiOjE2OTM1MDk0Mjd9.SX4x09G7sXP0fykXX17S-kVjZ8yLwdsOwhAjH1-kNDI",
                refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZWNhOTkwMTUwZjZhMzlhZDc3NDNjOCIsImVtYWlsIjoiYWRtaW5AbWluZGNhcmUuY29tIiwicGFzc3dvcmQiOiIxMjMifSwiaWF0IjoxNjkzNTA1ODI3LCJleHAiOjE2OTM1OTIyMjd9.05cXfQLL099Ju_96i7XbXrL9V7M2JSF2tpcRYE1JCuw",
                data: {
                  _id: "64eca990150f6a39ad7743c8",
                  email: "admin@mindcare.com",
                  password: "123"
                }
              }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const loginServiceMock = jest.spyOn(adminService, 'loginService').mockReturnValueOnce(userPayload)
            const { body, statusCode } = await request(baseUrl).post('/login').send(userInput)
            expect(statusCode).toBe(200)
            expect(body).toEqual(userPayload)
            expect(loginServiceMock).toHaveBeenCalledWith(userInput)
        })
        it('POST /api/v1/admin/login - return 409', async () => {
            const payload = {
                "email": "admin@mindcare.com",
                "password": "1234"
            }
            const { body, statusCode } = await request(baseUrl).post('/login').send(payload)
            expect(statusCode).toBe(409)
            expect(body.status).toEqual('fail')
        })
    })
})
