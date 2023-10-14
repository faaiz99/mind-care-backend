import request from "supertest";
import { describe, expect, it } from "@jest/globals";
import { httpServer } from "../app.js";

import { afterAll } from "@jest/globals";

afterAll(async () => {
  httpServer.close();
});

describe("Mind Care Therapist", () => {
  it("GET /api/v1/therapist", async () => {
    const response = await request(httpServer).get("/api/v1/therapist");
    expect(response.statusCode).toBe(200);
    expect(response.text).toEqual("Therapist");
  });
});
