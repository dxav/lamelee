import { prisma } from '../../src/lib/db';

describe('Prisma basic queries', () => {
  it('can list experiences (empty array ok)', async () => {
    const items = await prisma.experience.findMany({ take: 1 });
    expect(Array.isArray(items)).toBe(true);
  });
});
