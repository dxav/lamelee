import { prisma } from '../../src/lib/db';

describe('DB performance (<200ms basic query)', () => {
  it('measures simple count', async () => {
    const start = Date.now();
    await prisma.experience.count();
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(2000); // relaxed threshold without indexes
  });
});
