import { SetMetadata } from '@nestjs/common';

export const METADATA_KEY_ROLES = 'roles';

export const Roles = (...args: string[]) =>
  SetMetadata(METADATA_KEY_ROLES, args);
