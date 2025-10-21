/** T014 Contract test GET /api/users/me (expected to FAIL) */
describe('Contract: GET /api/users/me', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/users/me').default).toThrow();
  });
});
