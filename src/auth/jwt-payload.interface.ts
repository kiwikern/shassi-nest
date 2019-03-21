import { Role } from '../users/entities/user.entity';

export interface JwtPayload {
  userId: string;
  username: string;
  roles: Role[];
}
