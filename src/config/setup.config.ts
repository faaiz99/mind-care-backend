import dotenv from 'dotenv'
dotenv.config()
import { disconnect, connect } from './db.config.ts';
import { server } from '../../app.ts';
import {afterAll, beforeAll } from '@jest/globals';

beforeAll(async () => {
    await connect()
});


afterAll(async()=>{
   await disconnect()
   server.close()
})
