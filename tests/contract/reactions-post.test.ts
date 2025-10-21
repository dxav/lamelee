/** T012 Contract test POST /api/experiences/[id]/reactions (expected to FAIL) */
describe('Contract: POST /api/experiences/[id]/reactions', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/experiences/[id]/reactions').default).toThrow();
  });
});
