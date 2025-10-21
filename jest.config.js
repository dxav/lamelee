module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { isolatedModules: true }],
  },
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  verbose: false,
};
