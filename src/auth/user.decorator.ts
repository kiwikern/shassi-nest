import { createParamDecorator } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';

export const userDecoratorFactory = (data, req): JwtPayload => {
  return req.user;
};

export const User = createParamDecorator(userDecoratorFactory);
