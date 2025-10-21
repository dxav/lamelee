// T064 Error handling middleware (utility)
import type { NextApiResponse } from 'next';

export function sendError(res: NextApiResponse, status: number, message: string) {
  return res.status(status).json({ error: message });
}
