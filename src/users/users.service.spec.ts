import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserCreateDto } from './dtos/user-create.dto';
import { MockType } from '../../test/mock.type';
import { Repository } from 'typeorm';
import { BcryptService } from '../common/bcrypt.service';
import { BadRequestException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let repositoryMock: MockType<Partial<Repository<UserEntity>>>;
  let bcryptService: MockType<BcryptService>;

  beforeEach(async () => {
    repositoryMock = new (jest.fn(() => ({
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(user => user),
      save: jest.fn(entity => entity),
      delete: jest.fn(() => Promise.resolve()),
    })))();
    bcryptService = new (jest.fn(() => ({
      hash: jest.fn(),
      checkEncryptedData: jest.fn(),
    })))();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(UserEntity), useValue: repositoryMock },
        { provide: BcryptService, useValue: bcryptService },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('should create a user', async () => {
    const user: UserCreateDto = { email: 'email', password: 'password', username: 'user' };
    bcryptService.hash.mockReturnValue('hashed');
    const newUser = Object.assign({}, user, { password: 'hashed' });
    expect(await service.createUser(user)).toEqual(newUser);
  });

  it('should reject a duplicate username', async () => {
    const user: UserCreateDto = { email: 'email', password: 'password', username: 'user' };
    repositoryMock.findOne.mockReturnValue(user);
    try {
      await service.createUser(user);
      fail('should throw error');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      expect(e.message.error).toContain('username');
    }
  });

  it('should reject a duplicate mail address', async () => {
    const user: UserCreateDto = { email: 'email', password: 'password', username: 'user' };
    repositoryMock.findOne.mockReturnValueOnce(null);
    repositoryMock.findOne.mockReturnValueOnce(user);
    try {
      await service.createUser(user);
      fail('should throw error');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      expect(e.message.error).toContain('email');
      expect(repositoryMock.findOne).toHaveBeenCalledTimes(2);
    }
  });

  it('should accept a null mail address', async () => {
    const user: UserCreateDto = { password: 'password', username: 'user' };
    repositoryMock.findOne.mockImplementation(d => d.hasOwnProperty('email') ? user : null);
    await service.createUser(user);
    expect(repositoryMock.findOne).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
  });

  it('should find a user by name', async () => {
    repositoryMock.findOne.mockReturnValue('found');
    expect(await service.findOneByUsername('user')).toBe('found');
  });

  it('should update a user', async () => {
    repositoryMock.findOne.mockReturnValue({email: 'old'});
    expect(await service.updateUser('user', {email: 'new'}))
      .toEqual({email: 'new'});
  });

});
