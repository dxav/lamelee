import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
  if (req.method === 'GET') {
    const exp = await prisma.experience.findUnique({ where: { id }, include: { prompts: true, reactions: true } });
    if (!exp) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ data: exp });
  }
  if (req.method === 'PUT') {
    const { title, description, tags } = req.body;
    const exp = await prisma.experience.update({ where: { id }, data: { title, description, tags } });
    return res.status(200).json({ data: exp });
  }
  if (req.method === 'DELETE') {
    await prisma.experience.delete({ where: { id } });
    return res.status(204).end();
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
