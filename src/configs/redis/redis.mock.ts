/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock("redis", () => ({
  createClient: jest.fn().mockReturnValue({
    on: jest.fn(),
    connect: jest.fn(),
    get: (key: string, cb: any) => cb(),
    set: (args: string[], cb: any) => cb(),
  }),
}));
