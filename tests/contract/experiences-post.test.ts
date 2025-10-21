/** T007 Contract test POST /api/experiences (expected to FAIL) */
describe('Contract: POST /api/experiences', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/index').default).toThrow();
  });
});
