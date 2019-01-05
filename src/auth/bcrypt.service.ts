import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {

  checkEncryptedData(dataToBeChecked, encryptedControlData): Promise<boolean> {
    return bcrypt.compare(dataToBeChecked, encryptedControlData);
  }

}
