import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/db';
import { validateGithubUrl, sanitizeInput } from '../../../lib/validations';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { ai_assistant, search, tag } = req.query;
    const where: any = {};
    if (ai_assistant) where.aiAssistantType = ai_assistant;
    if (tag) where.tags = { has: tag };
    if (search) where.OR = [
      { title: { contains: String(search), mode: 'insensitive' } },
      { description: { contains: String(search), mode: 'insensitive' } },
    ];
    const experiences = await prisma.experience.findMany({ where, take: 50, orderBy: { createdAt: 'desc' } });
    return res.status(200).json({ data: experiences });
  }
  if (req.method === 'POST') {
    try {
      const { title, description, aiAssistantType, tags = [], githubUrls = [], promptContent, promptContext } = req.body;
      if (!title || !aiAssistantType || !promptContent) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      const cleanTitle = sanitizeInput(title);
      const cleanDesc = sanitizeInput(description || '');
      const cleanPromptContent = sanitizeInput(promptContent);
      const invalidUrl = githubUrls.find((u: string) => !validateGithubUrl(u));
      if (invalidUrl) return res.status(400).json({ error: 'Invalid GitHub URL: ' + invalidUrl });
      const user = await prisma.user.findFirst();
      if (!user) return res.status(401).json({ error: 'No user in context' });
      const experience = await prisma.experience.create({
        data: {
          userId: user.id,
          title: cleanTitle,
          description: cleanDesc,
          aiAssistantType,
          tags,
          githubUrls,
          prompts: { create: [{ content: cleanPromptContent, context: promptContext }] },
        },
        include: { prompts: true },
      });
      return res.status(201).json({ data: experience });
    } catch (e: any) {
      return res.status(500).json({ error: e.message });
    }
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
