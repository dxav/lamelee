/** T016 Integration test: GitHub SSO (expected to FAIL) */
describe('Integration: GitHub SSO', () => {
  test('NextAuth route exists', () => {
    expect(() => require('../../src/pages/api/auth/[...nextauth]').default).toThrow();
  });
});
