import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { METADATA_KEY_ROLES } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredMethodRoles =
      this.reflector.get<string[]>(METADATA_KEY_ROLES, context.getHandler()) ||
      [];
    const requiredClassRoles =
      this.reflector.get<string[]>(METADATA_KEY_ROLES, context.getClass()) ||
      [];
    const requiredRoles = [...requiredClassRoles, ...requiredMethodRoles];
    if (requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      this.logger.warn('AuthGuard seems to be missing.');
      return false;
    }

    return (
      Array.isArray(user.roles) &&
      user.roles.some(role => requiredRoles.includes(role))
    );
  }
}
