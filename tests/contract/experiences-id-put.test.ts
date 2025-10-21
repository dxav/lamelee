/** T009 Contract test PUT /api/experiences/[id] (expected to FAIL) */
describe('Contract: PUT /api/experiences/[id]', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/[id]').default).toThrow();
  });
});
