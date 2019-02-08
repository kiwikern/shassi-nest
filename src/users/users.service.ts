import { BadRequestException, Injectable } from '@nestjs/common';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserUpdateDto } from './dtos/user-update.dto';
import { ObjectID } from 'mongodb';
import { BcryptService } from '../common/bcrypt.service';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
              private bcryptService: BcryptService) {
  }

  async createUser(user: UserCreateDto): Promise<UserEntity> {
    if (await this.findOneByUsername(user.username)) {
      throw new BadRequestException('Username already exists', 'username_already_exists');
    }

    if (user.email && await this.findOneByEmail(user.email)) {
      throw new BadRequestException('E-Mail already exists', 'email_already_exists');
    }

    user.password = await this.bcryptService.hash(user.password);
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findOneByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ username });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ email });
  }

  async updateUser(userId: ObjectID, userUpdate: UserUpdateDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ _id: userId });
    Object.assign(user, userUpdate);
    return this.userRepository.save(user);
  }

}
