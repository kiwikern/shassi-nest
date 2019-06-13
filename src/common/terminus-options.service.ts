import {
  TerminusEndpoint,
  TerminusOptionsFactory,
  DNSHealthIndicator,
  TerminusModuleOptions, TypeOrmHealthIndicator, DiskHealthIndicator, MemoryHealthIndicator,
} from '@nestjs/terminus';
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {
  constructor(
    private readonly dns: DNSHealthIndicator,
    // private readonly typeorm: TypeOrmHealthIndicator,
    // @InjectConnection() private readonly connection,
    private readonly memory: MemoryHealthIndicator,
  ) {
  }

  createTerminusOptions(): TerminusModuleOptions {
    const healthEndpoint: TerminusEndpoint = {
      url: '/health',
      healthIndicators: [
        async () => this.dns.pingCheck('google', 'https://google.com', { timeout: 800 }),
        // TODO: see https://github.com/nestjs/terminus/issues/222, remove connection
        // async () => this.typeorm.pingCheck('database', { connection: this.connection }),
        async () => this.memory.checkHeap('heap', 2 * 1024 * 1024 * 1024),
        async () => this.memory.checkRSS('memory-rss', 2 * 1024 * 1024 * 1024),
      ],
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}
