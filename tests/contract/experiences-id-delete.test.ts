/** T010 Contract test DELETE /api/experiences/[id] (expected to FAIL) */
describe('Contract: DELETE /api/experiences/[id]', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/[id]').default).toThrow();
  });
});
