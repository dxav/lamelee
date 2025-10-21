import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { reactionType } = req.body;
  if (!reactionType) return res.status(400).json({ error: 'Missing reactionType' });
  const user = await prisma.user.findFirst();
  if (!user) return res.status(401).json({ error: 'No user' });
  try {
    const reaction = await prisma.reaction.upsert({
      where: { experienceId_userId_reactionType: { experienceId: id, userId: user.id, reactionType } },
      update: {},
      create: { experienceId: id, userId: user.id, reactionType },
    });
    return res.status(201).json({ data: reaction });
  } catch (e: any) {
    return res.status(500).json({ error: e.message });
  }
}
