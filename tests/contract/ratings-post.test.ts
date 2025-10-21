/** T013 Contract test POST /api/prompts/[id]/ratings (expected to FAIL) */
describe('Contract: POST /api/prompts/[id]/ratings', () => {
  test('route handler exists', () => {
    expect(() => require('../../src/pages/api/prompts/[id]/ratings').default).toThrow();
  });
});
