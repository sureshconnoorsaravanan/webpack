module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  collectCoverage: true, // Enables coverage collection
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Include TypeScript files for coverage
    "!src/**/*.d.ts", // Exclude type declaration files
  ],
  coverageDirectory: "coverage", // Where the coverage report is saved
  coverageReporters: ["html", "text"], // Generates both HTML and text coverage reports
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
};
