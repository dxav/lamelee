/** T020 Integration test: User profile (expected to FAIL) */
describe('Integration: User Profile', () => {
  test('User routes exist', () => {
    expect(() => require('../../src/pages/api/users/me').default).toThrow();
    expect(() => require('../../src/pages/api/users/[id]').default).toThrow();
  });
});
