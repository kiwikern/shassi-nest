import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';

export const userDecoratorFactory = (data: unknown, ctx: ExecutionContext): JwtPayload => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
};

export const User = createParamDecorator(userDecoratorFactory);
