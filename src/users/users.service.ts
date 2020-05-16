import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserCreateDto } from './dtos/user-create.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserUpdateDto } from './dtos/user-update.dto';
import { ObjectID } from 'mongodb';
import { BcryptService } from '../common/bcrypt.service';
import * as faker from 'faker';

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

    if (user.password) {
      user.password = await this.bcryptService.hash(user.password);
    }
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async findOneByUsername(username: string): Promise<UserEntity> {
    const escapedUsername = username.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const usernameRegExp = new RegExp(`^${escapedUsername}$`, 'i');
    return this.userRepository.findOne(
      {
        username: {
          $regex: usernameRegExp,
        },
      } as any);
  }

  private async findOneByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ email });
  }

  async updateUser(userId: ObjectID, userUpdate: UserUpdateDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ _id: userId });
    Object.assign(user, userUpdate);
    return this.userRepository.save(user);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOneById(userId: ObjectID) {
    return this.userRepository.findOne(userId);
  }

  /**
   * When you register directly via Telegram, your username might already
   * be taken. Then an available username is generated and the user is created.
   *
   * @param username
   */
  async createUserWithUniqueName(username: string | null) {
    if (!username) {
      username = faker.internet.userName();
    }
    const nameVariants = ['', ...Array(100).keys()]
      .map(i => username + i);
    const takenNames = await this.userRepository.find({ where: { username: { $in: nameVariants } } });
    const availableNames = nameVariants.filter(n => !takenNames.map(u => u.username).includes(n));
    if (availableNames.length > 0) {
      return this.createUser({ username: availableNames[0], password: null });
    } else {
      throw new InternalServerErrorException('Username is not available.');
    }
  }
}
