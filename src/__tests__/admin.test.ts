
import request from 'supertest'
import { describe, expect, it } from '@jest/globals';
import * as adminService from '../services/admin.service.ts'

const baseUrl = 'http://localhost:8080/api/v1/admin'

describe('Mind Care Admin', () => {
    describe('Admin Home', () => {
        it('GET /api/v1/admin', async () => {
            const response = await request(baseUrl).get('/')
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
            const { body, statusCode } = await request(baseUrl).post('/signup').send(userInput)
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
            const { body, statusCode } = await request(baseUrl).post('/login').send(userInput)
            expect(statusCode).toBe(200)
            expect(body).toEqual(userPayload)
            expect(loginServiceMock).toHaveBeenCalledWith(userInput.email, userInput.password)
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
    describe('Admin About', () => {
        it('GET /api/v1/admin/about/:id -return 200', async () => {
            const query = {
                id: '64feab67d9424b8ece56a551'
            }
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
            const { body, statusCode } = await request(baseUrl).get(`/about/${query.id}`)
            expect(statusCode).toBe(200)
            expect(body.data).toEqual(payload)
            expect(aboutSerivceMock).toHaveBeenCalled()
        })
    })
    describe('Admin Refresh Token', () => {
        it('POST /api/v1/admin/refresh-token -return 200', async () => {
            const userInput = {
                status: "success",
                accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmVhYjY3ZDk0MjRiOGVjZTU2YTU1MSIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWluZGNhcmUuY29tIiwiZ2VuZGVyIjoibWFsZSIsInJvbGUiOiJhZG1pbiIsInBhc3N3b3JkIjoiMTIzIiwiX192IjowfSwiaWF0IjoxNjk0NDUxNTM3LCJleHAiOjE2OTQ0NTUxMzd9.y8YjsRe_RW1bePWtQE0dP_AUVzJM8Tk50uoL-jZMBYU',
                refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmVhYjY3ZDk0MjRiOGVjZTU2YTU1MSIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWluZGNhcmUuY29tIiwiZ2VuZGVyIjoibWFsZSIsInJvbGUiOiJhZG1pbiIsInBhc3N3b3JkIjoiMTIzIiwiX192IjowfSwiaWF0IjoxNjk0NDUxNTM3LCJleHAiOjE2OTQ1Mzc5Mzd9.uBnNeBC08y7cZm1M8Bdrwtzh0gq-1-G0vHGWmrYX81g',
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
              /**
               * Auth header contains refresh-token
               */
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const header = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0ZmVhYjY3ZDk0MjRiOGVjZTU2YTU1MSIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AbWluZGNhcmUuY29tIiwiZ2VuZGVyIjoibWFsZSIsInJvbGUiOiJhZG1pbiIsInBhc3N3b3JkIjoiMTIzIiwiX192IjowfSwiaWF0IjoxNjk0NDUxNTM3LCJleHAiOjE2OTQ0NTUxMzd9.y8YjsRe_RW1bePWtQE0dP_AUVzJM8Tk50uoL-jZMBYU'}
            const userPayload = {
                "status": "success",
                "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXIiOnsiX2lkIjoiNjRmZWFiNjdkOTQyNGI4ZWNlNTZhNTUxIiwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtaW5kY2FyZS5jb20iLCJnZW5kZXIiOiJtYWxlIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjMiLCJfX3YiOjB9LCJpYXQiOjE2OTQ0NTE1MzcsImV4cCI6MTY5NDQ1NTEzN30sImlhdCI6MTY5NDQ1MjU1MywiZXhwIjoxNjk0NDU2MTUzfQ.3WLpOTfd-NxUQ9gky2rDezS-aewIlHJ7BW6NlOmQ4aI",
                "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXIiOnsiX2lkIjoiNjRmZWFiNjdkOTQyNGI4ZWNlNTZhNTUxIiwiZmlyc3ROYW1lIjoiYWRtaW4iLCJsYXN0TmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBtaW5kY2FyZS5jb20iLCJnZW5kZXIiOiJtYWxlIiwicm9sZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjMiLCJfX3YiOjB9LCJpYXQiOjE2OTQ0NTE1MzcsImV4cCI6MTY5NDQ1NTEzN30sImlhdCI6MTY5NDQ1MjU1MywiZXhwIjoxNjk0NTM4OTUzfQ.LQ-MH3jSHS2nhkif79EgiLcEBXcOpH6V9BXKmegpYcA",
                "data": {
                  "user": {
                    "_id": "64feab67d9424b8ece56a551",
                    "firstName": "admin",
                    "lastName": "admin",
                    "email": "admin@mindcare.com",
                    "gender": "male",
                    "role": "admin",
                    "password": "123",
                    "__v": 0
                  },
                  "iat": 1694451537,
                  "exp": 1694455137
                }
              }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const refreshTokenServiceMock = jest.spyOn(adminService, 'renewTokens').mockReturnValueOnce(userPayload)
            const { body, statusCode } = await request(baseUrl).post('refresh-token').send(userInput)
            expect(statusCode).toBe(200)
            expect(body).toEqual(userPayload)
            expect(refreshTokenServiceMock).toHaveBeenCalledWith(userInput)
        })
    })
})
