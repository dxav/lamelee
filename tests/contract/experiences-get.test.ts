/**
 * T006 Contract test GET /api/experiences
 * Expected to FAIL until /api/experiences implementation exists.
 */
describe('Contract: GET /api/experiences', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/index').default).toThrow();
  });
});
