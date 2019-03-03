import { Logger } from '@nestjs/common';

export class TelegrafMock {
  logger: Logger = new Logger(TelegrafMock.name);
  telegram = {
    sendMessage: () => this.logger.log('sendMessage'),
  };

  hears() {
    this.logger.log('hears');
  }

  command() {
    this.logger.log('command');
  }

  use() {
    this.logger.log('use');
  }

  catch() {
    this.logger.log('catch');
  }

  action() {
    this.logger.log('action');
  }

  startPolling() {
    this.logger.log('startPolling');
  }

  on() {
    this.logger.log('on');
  }
}
