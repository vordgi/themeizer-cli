/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ["src/lib/**/*.{js,ts}", "!src/lib/loadColors.ts"],
  coverageReporters: ["text"],
  testRegex: "src/tests/.*\\.test\\.ts$",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};
