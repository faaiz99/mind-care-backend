import dotenv from 'dotenv';
dotenv.config();
import { httpServer } from '../../app.js';
import { afterAll } from '@jest/globals';
afterAll(async () => {
    httpServer.close();
});
//# sourceMappingURL=config.js.map