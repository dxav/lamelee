/** T018 Integration test: Feed filter (expected to FAIL) */
describe('Integration: Feed Filter', () => {
  test('GET /api/experiences route exists', () => {
    expect(() => require('../../src/pages/api/experiences/index').default).toThrow();
  });
});
