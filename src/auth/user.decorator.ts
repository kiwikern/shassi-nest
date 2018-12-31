import { createParamDecorator } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';

export const User = createParamDecorator((data, req): JwtPayload => {
  return req.user;
});
