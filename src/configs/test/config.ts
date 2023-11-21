import dotenv from "dotenv";
dotenv.config();
import { afterAll } from "@jest/globals";
import { httpServer } from "../../../src/app.js";
afterAll(async () => {
  httpServer.close();
});
