import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const user = await prisma.user.findFirst({ include: { experiences: true, promptRatings: true } });
  if (!user) return res.status(404).json({ error: 'No user' });
  return res.status(200).json({ data: user });
}
