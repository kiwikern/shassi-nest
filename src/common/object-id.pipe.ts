import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ObjectID } from 'mongodb';

@Injectable()
export class ObjectIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (ObjectID.isValid(value)) {
      return new ObjectID(value);
    } else {
      throw new BadRequestException('Given id is not valid', 'invalid_id_format');
    }
  }
}
