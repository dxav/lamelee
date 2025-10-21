// T062 GitHub URL preview service (mock implementation)
// Real implementation would call GitHub API; here we parse owner/repo.

export interface RepoPreview {
  owner: string;
  name: string;
  url: string;
}

export function parseGithubRepo(url: string): RepoPreview | null {
  try {
    const u = new URL(url);
    if (u.hostname !== 'github.com') return null;
    const parts = u.pathname.split('/').filter(Boolean);
    if (parts.length < 2) return null;
    return { owner: parts[0], name: parts[1], url };
  } catch {
    return null;
  }
}
