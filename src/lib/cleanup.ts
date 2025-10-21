// T066 / T067 Data retention jobs (simplified placeholders)
import { prisma } from './db';

// Mark users older than 2 years for deletion
export async function runRetentionSweep() {
  const cutoff = new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000);
  await prisma.user.updateMany({ where: { createdAt: { lt: cutoff }, deletedAt: null }, data: { deletedAt: new Date() } });
}

// Hard delete users soft-deleted >30 days ago
export async function runHardDelete() {
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  await prisma.user.deleteMany({ where: { deletedAt: { not: null, lt: cutoff } } });
}
