import { Injectable, OnModuleInit } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { enableStealthMode } from './stealth-mode.utils';

@Injectable()
export class PuppeteerService implements OnModuleInit {
  private browser: puppeteer.Browser;

  async onModuleInit(): Promise<void> {
    await this.initializeBrowser();
    this.browser.on('disconnected', () => this.initializeBrowser());
  }

  async evaluateInBrowser<T>(url: string, evaluationFunc: () => T): Promise<T> {
    const page = await this.browser.newPage();
    try {
      await page.setViewport({ width: 1024, height: 768 });
      await enableStealthMode(page);
      await page.goto(url);
      await page.mouse.move(230, 291);
      // page.screenshot({ path: 'screenshot.png', fullPage: true });
      return (await page.evaluate(evaluationFunc)) as Promise<T>;
    } finally {
      await page.close();
    }
  }

  private async initializeBrowser() {
    this.browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
      ],
      headless: true,
    });
  }
}
