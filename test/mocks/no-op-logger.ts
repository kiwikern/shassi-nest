import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class NoOpLogger implements LoggerService {
  error(message: any, trace?: string, context?: string) {
    // no-op
  }

  log(message: any, context?: string) {
    // no-op
  }

  warn(message: any, context?: string) {
    // no-op
  }

}
