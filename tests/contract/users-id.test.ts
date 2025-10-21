/** T015 Contract test GET /api/users/[id] (expected to FAIL) */
describe('Contract: GET /api/users/[id]', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/users/[id]').default).toThrow();
  });
});
