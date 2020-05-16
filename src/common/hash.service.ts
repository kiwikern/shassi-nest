import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class HashService {
  createHash(data: string, secret: string) {
    const secretKey = crypto.createHash('sha256').update(secret).digest();

    return crypto.createHmac('sha256', secretKey).update(data).digest('hex');
  }
}
