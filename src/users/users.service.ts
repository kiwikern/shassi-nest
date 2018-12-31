import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { UserUpdateDto } from './dtos/user-update.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
  }

  async createUser(user: UserCreateDto): Promise<UserEntity> {
    user.password = await this.hashPassword(user.password);
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findOneByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ username });
  }

  async updateUser(userId: string, userUpdate: UserUpdateDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne(userId);
    Object.assign(user, userUpdate);
    return this.userRepository.save(user);
  }

  private async hashPassword(password: string): Promise<string> {
    return hash(password, 10);
  }
}
