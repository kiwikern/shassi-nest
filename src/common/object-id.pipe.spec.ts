import { ObjectIdPipe } from './object-id.pipe';
import { BadRequestException } from '@nestjs/common';
import { ObjectID } from 'mongodb';

describe('ObjectIdPipe', () => {
  let pipe: ObjectIdPipe;
  beforeAll(() => {
    pipe = new ObjectIdPipe();
  });

  it('should throw on invalid id', () => {
    expect(() => pipe.transform('1234', null)).toThrow(BadRequestException);
  });

  it('should throw on null', () => {
    expect(() => pipe.transform(null, null)).toThrow(BadRequestException);
  });

  it('should return an ObjectID', () => {
    const objectID = ObjectID.createFromTime(0);
    expect(pipe.transform(objectID.toString(), null)).toEqual(objectID);
  });
});
