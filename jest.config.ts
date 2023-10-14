/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  // globalSetup:"./src/config/setup.config.ts",
  setupFilesAfterEnv: ["./src/configs/test/config.ts"],
  testMatch: ["<rootDir>./src/__tests__/*.test.ts"],
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/$1",
  },
};
