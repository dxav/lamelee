import { validateGithubUrl, sanitizeInput } from '../../src/lib/validations';

describe('validateGithubUrl', () => {
  it('accepts valid github repo url', () => {
    expect(validateGithubUrl('https://github.com/owner/repo')).toBe(true);
  });
  it('rejects non github host', () => {
    expect(validateGithubUrl('https://example.com/owner/repo')).toBe(false);
  });
  it('rejects missing path', () => {
    expect(validateGithubUrl('https://github.com/')).toBe(false);
  });
});

describe('sanitizeInput', () => {
  it('replaces angle brackets', () => {
    expect(sanitizeInput('<script>alert(1)</script>')).toBe('_script>alert(1)/script_');
  });
  it('trims whitespace', () => {
    expect(sanitizeInput('  hello  ')).toBe('hello');
  });
});
