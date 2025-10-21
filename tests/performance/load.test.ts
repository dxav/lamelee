import { prisma } from '../../src/lib/db';

describe('Connection load test (simplified)', () => {
  it('runs parallel queries', async () => {
    const tasks = Array.from({ length: 10 }).map(() => prisma.experience.count());
    const results = await Promise.all(tasks);
    expect(results.length).toBe(10);
  });
});
