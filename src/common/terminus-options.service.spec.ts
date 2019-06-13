import { Test, TestingModule } from '@nestjs/testing';
import { TerminusOptionsService } from './terminus-options.service';
import { DNSHealthIndicator, MemoryHealthIndicator } from '@nestjs/terminus';

describe('TerminusOptionsService', () => {
  let service: TerminusOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TerminusOptionsService,
        { provide: DNSHealthIndicator, useValue: jest.fn(() => ({ pingCheck: () => 'ping' }))() },
        {
          provide: MemoryHealthIndicator, useValue: jest.fn(() => (
            {
              checkHeap: () => 'heap',
              checkRSS: () => 'rss',
            }
          ))(),
        },
      ],
    }).compile();

    service = module.get<TerminusOptionsService>(TerminusOptionsService);
  });

  it('should create options', async () => {
    const options = service.createTerminusOptions();
    const endpoint = options.endpoints[0];
    expect(endpoint.url).toEqual('/health');
    await expect(endpoint.healthIndicators[0]()).resolves.toEqual('ping');
    await expect(endpoint.healthIndicators[1]()).resolves.toEqual('heap');
    await expect(endpoint.healthIndicators[2]()).resolves.toEqual('rss');
  });
});
