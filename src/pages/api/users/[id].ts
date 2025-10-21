import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  const user = await prisma.user.findUnique({ where: { id }, include: { experiences: true, promptRatings: true } });
  if (!user) return res.status(404).json({ error: 'Not found' });
  const experienceCount = user.experiences.length;
  const promptCount = user.promptRatings.length;
  return res.status(200).json({ data: { ...user, experienceCount, promptCount } });
}
