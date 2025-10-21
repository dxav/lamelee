import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/db';
import { sanitizeInput } from '../../../../lib/validations';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  if (req.method === 'GET') {
    const comments = await prisma.comment.findMany({ where: { experienceId: id }, orderBy: { createdAt: 'asc' } });
    return res.status(200).json({ data: comments });
  }
  if (req.method === 'POST') {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: 'Missing content' });
    const user = await prisma.user.findFirst();
    if (!user) return res.status(401).json({ error: 'No user' });
    const comment = await prisma.comment.create({ data: { experienceId: id, userId: user.id, content: sanitizeInput(content) } });
    return res.status(201).json({ data: comment });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
