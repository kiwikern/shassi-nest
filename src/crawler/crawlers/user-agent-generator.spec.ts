import { generateUserAgent } from './user-agent-generator';

describe('UserAgentGenerator', () => {
  it('should generate a random user agent', () => {
    const userAgent = generateUserAgent();
    expect(typeof userAgent).toEqual('string');
    expect(userAgent.length).toBeGreaterThanOrEqual(5);
  });
});
