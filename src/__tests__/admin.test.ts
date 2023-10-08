
import request from 'supertest'
import { describe, expect, it } from '@jest/globals';
import { httpServer } from '../app.js';
import * as adminService from '../services/admin.service.js'
import { afterAll } from '@jest/globals';

afterAll(async()=>{
    httpServer.close()
})

describe('Mind Care Admin', () => {
    describe('Admin Home', () => {
        it('GET /api/v1/admin', async () => {
            const response = await request(httpServer).get('/api/v1/admin')
            expect(response.statusCode).toBe(401)
            expect(response.text).toEqual('Unauthorized')
        })
    })
    describe("Admin Signup", () => {
        it("POST /api/v1/admin/signup - return 200", async () => {
            const userInput = {
                firstName: "admin",
                lastName: "admin",
                email: "admin@mindcare.com",
                gender: "male",
                role: "admin",
                password: "123"
            }
            const userPayload = {
                status: "success",
                message: "Admin Account created",
                data: {
                    firstName: "admin",
                    lastName: "admin",
                    email: "admin@mindcare.com",
                    gender: "male",
                    role: "admin",
                    password: "123",
                    _id: "64feab67d9424b8ece56a551",
                    __v: 0
                }
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const signupServiceMock = jest.spyOn(adminService, 'signup').mockReturnValueOnce(userPayload)
            const { body, statusCode } = await request(httpServer).post('/api/v1/admin/signup').send(userInput)
            expect(statusCode).toBe(200)
            expect(body.data).toEqual(userPayload)
            expect(signupServiceMock).toHaveBeenCalledWith(userInput)
        })
    })
    describe('Admin Login', () => {
        it('POST /api/v1/admin/login - return 200', async () => {
            const userInput = {
                email: "admin@mindcare.com",
                password: "123"
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
            const loginServiceMock = jest.spyOn(adminService, 'login').mockReturnValueOnce(userPayload)
            const { body, statusCode } = await request(httpServer).post('/api/v1/admin/login').send(userInput)
            expect(statusCode).toBe(200)
            expect(body).toEqual(userPayload)
            expect(loginServiceMock).toHaveBeenCalledWith(userInput.email, userInput.password)
        })
        it('POST /api/v1/admin/login - return 409', async () => {
            const payload = {
                "email": "admin@mindcare.com",
                "password": "1234"
            }
            const { body, statusCode } = await request(httpServer).post('/api/v1/admin/login').send(payload)
            expect(statusCode).toBe(409)
            expect(body.status).toEqual('fail')
        })
    })
    describe('Admin About', () => {
        it('GET /api/v1/admin/about/:id -return 200', async () => {
            const id =  '64feab67d9424b8ece56a551'
         
            const payload = {
                status: "success",
                message: "Admin Account found",
                data: {
                    _id: "64feab67d9424b8ece56a551",
                    firstName: "admin",
                    lastName: "admin",
                    email: "admin@mindcare.com",
                    gender: "male",
                    role: "admin",
                    password: "123",
                    __v: 0
                }
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const aboutSerivceMock = jest.spyOn(adminService, 'aboutAdmin').mockReturnValueOnce(payload)
            const { body, statusCode } = await request(httpServer).get(`/api/v1/admin/about/${id}`)
            expect(statusCode).toBe(200)
            expect(body.data).toEqual(payload)
            expect(aboutSerivceMock).toHaveBeenCalled()
        })
    })
    describe('Admin Refresh Token', () => {
        it('POST /api/v1/admin/refresh-token -return 409', async () => {
            /**
             * Auth header contains refresh-token
             * Needs to have a valid token
             */
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const header = { "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXIiOnsiX2lkIjoiNjRmZWFiNjdkOTQyNGI4ZWNlNTZhNTUxIiwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtaW5kY2FyZS5jb20iLCJnZW5kZXIiOiJtYWxlIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjMiLCJfX3YiOjB9LCJpYXQiOjE2OTQ0NTcwMjQsImV4cCI6MTY5NDQ2MDYyNH0sImlhdCI6MTY5NDQ1Nzc1MiwiZXhwIjoxNjk0NDYxMzUyfQ.qwIS9PXDH0zEcWkc71DdGGYQnGIxzPgwyWNJXG7PmT4" }
            const userPayload = {
                status: "failure",
                message:"Please Login Again"
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const refreshTokenServiceMock = jest.spyOn(adminService, 'renewTokens').mockRejectedValueOnce(userPayload)
            const { body, statusCode } = await request(httpServer)
                .post('/api/v1/admin/refresh-token')
                .set(header).send()
            expect(statusCode).toBe(409)
            expect(body).toEqual(userPayload)
            expect(refreshTokenServiceMock).not.toHaveBeenCalled()
        })
    })
})
