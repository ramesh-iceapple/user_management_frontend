export default {
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 65,
      lines: 60,
      statements: 60,
    },
  },
  coverageReporters: ['lcov', 'json'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/node_modules/*'],
  coveragePathIgnorePatterns: ['coverage'],
  transform: {
    '.*': 'babel-jest',
  },
};
