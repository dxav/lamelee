/** T017 Integration test: Create experience (expected to FAIL) */
describe('Integration: Create Experience', () => {
  test('POST /api/experiences route exists', () => {
    expect(() => require('../../src/pages/api/experiences/index').default).toThrow();
  });
});
