import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { rating } = req.body;
  if (typeof rating !== 'number' || rating < 1 || rating > 5) return res.status(400).json({ error: 'Rating must be 1-5' });
  const user = await prisma.user.findFirst();
  if (!user) return res.status(401).json({ error: 'No user' });
  const data = await prisma.promptRating.upsert({
    where: { promptId_userId: { promptId: id, userId: user.id } },
    update: { rating },
    create: { promptId: id, userId: user.id, rating },
  });
  const stats = await prisma.promptRating.aggregate({ where: { promptId: id }, _avg: { rating: true }, _count: { rating: true } });
  return res.status(201).json({ data, average: stats._avg.rating, count: stats._count.rating });
}
