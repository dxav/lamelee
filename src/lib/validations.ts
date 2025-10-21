// T044 / T045 Validation & sanitization utilities

export function validateGithubUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.hostname === 'github.com' && /^https:\/\/github.com\/.+/.test(url);
  } catch {
    return false;
  }
}

export function sanitizeInput(input: string): string {
  return input.replace(/[<>]/g, '_').trim();
}
