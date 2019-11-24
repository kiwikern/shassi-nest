import * as UserAgent from 'user-agents';

export function generateUserAgent(): string {
  const userAgent = new UserAgent();
  return userAgent.toString();
}
