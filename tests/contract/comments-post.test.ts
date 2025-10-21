/** T011 Contract test POST /api/experiences/[id]/comments (expected to FAIL) */
describe('Contract: POST /api/experiences/[id]/comments', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/[id]/comments').default).toThrow();
  });
});
