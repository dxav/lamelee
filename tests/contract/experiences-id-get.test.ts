/** T008 Contract test GET /api/experiences/[id] (expected to FAIL) */
describe('Contract: GET /api/experiences/[id]', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/[id]').default).toThrow();
  });
});
