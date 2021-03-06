import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserCreateDto } from './dtos/user-create.dto';
import { MockType } from '../../test/mock.type';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { BcryptService } from '../common/bcrypt.service';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  bcryptServiceFactory,
  repositoryMockFactory,
} from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('UsersService', () => {
  let service: UsersService;
  let repositoryMock: MockType<Repository<UserEntity>>;
  let bcryptService: MockType<BcryptService>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useFactory: repositoryMockFactory,
        },
        { provide: BcryptService, useFactory: bcryptServiceFactory },
      ],
    }).compile();
    module.useLogger(new NoOpLogger());
    service = module.get<UsersService>(UsersService);
    repositoryMock = module.get(getRepositoryToken(UserEntity));
    bcryptService = module.get(BcryptService);
  });

  it('should create a user', async () => {
    const user: UserCreateDto = {
      email: 'email',
      password: 'password',
      username: 'user',
    };
    bcryptService.hash.mockReturnValue('hashed');
    const newUser = Object.assign({}, user, { password: 'hashed' });
    expect(await service.createUser(user)).toEqual(newUser);
  });

  it('should reject a duplicate username', async () => {
    const user: UserCreateDto = {
      email: 'email',
      password: 'password',
      username: 'user',
    };
    repositoryMock.findOne.mockReturnValue(user);
    try {
      await service.createUser(user);
      fail('should throw error');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      expect(e.response.error).toContain('username');
    }
  });

  it('should reject a duplicate mail address', async () => {
    const user: UserCreateDto = {
      email: 'email',
      password: 'password',
      username: 'user',
    };
    repositoryMock.findOne.mockReturnValueOnce(null);
    repositoryMock.findOne.mockReturnValueOnce(user);
    try {
      await service.createUser(user);
      fail('should throw error');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
      expect(e.response.error).toContain('email');
      expect(repositoryMock.findOne).toHaveBeenCalledTimes(2);
    }
  });

  it('should accept a null mail address', async () => {
    const user: UserCreateDto = { password: 'password', username: 'user' };
    repositoryMock.findOne.mockImplementation(d =>
      d.hasOwnProperty('email') ? user : null,
    );
    await service.createUser(user);
    expect(repositoryMock.findOne).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
  });

  it('should accept a null password for Telegram login', async () => {
    const user: UserCreateDto = { password: null, username: 'user' };
    repositoryMock.findOne.mockReturnValueOnce(null);
    await service.createUser(user);
    expect(repositoryMock.findOne).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(bcryptService.hash).not.toHaveBeenCalled();
  });

  it('should create a unique username for Telegram login', async () => {
    repositoryMock.find.mockReturnValueOnce([
      { username: 'amir' },
      { username: 'mara' },
    ]);
    expect(await service.createUserWithUniqueName('mara')).toEqual(
      expect.objectContaining({ username: 'mara0' }),
    );
    expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(bcryptService.hash).not.toHaveBeenCalled();
  });

  it('should create a unique username with given username', async () => {
    repositoryMock.find.mockReturnValueOnce([
      { username: 'amir' },
      { username: 'yannis' },
    ]);
    expect(await service.createUserWithUniqueName('mara')).toEqual(
      expect.objectContaining({ username: 'mara' }),
    );
    expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(bcryptService.hash).not.toHaveBeenCalled();
  });

  it('should create a unique username without given username', async () => {
    repositoryMock.find.mockReturnValueOnce([
      { username: 'amir' },
      { username: 'yannis' },
    ]);
    await expect(await service.createUserWithUniqueName(null)).toEqual(
      expect.objectContaining({ username: expect.any(String) }),
    );
    expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    expect(bcryptService.hash).not.toHaveBeenCalled();
  });

  it('should reject, if unique name could not be generated', async () => {
    repositoryMock.find.mockReturnValueOnce(
      ['', ...Array(100).keys()].map(i => ({ username: 'mara' + i })),
    );
    await expect(service.createUserWithUniqueName('mara')).rejects.toThrow(
      InternalServerErrorException,
    );
    expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    expect(repositoryMock.save).not.toHaveBeenCalled();
    expect(bcryptService.hash).not.toHaveBeenCalled();
  });

  it('should find a user by name', async () => {
    repositoryMock.findOne.mockReturnValue('found');
    expect(await service.findOneByUsername('user')).toBe('found');
  });

  it('should find a user by id', async () => {
    repositoryMock.findOne.mockReturnValue('found');
    expect(await service.findOneById(ObjectID.createFromTime(0))).toBe('found');
  });

  it('should update a user', async () => {
    repositoryMock.findOne.mockReturnValue({ email: 'old' });
    expect(await service.updateUser(null, { email: 'new' })).toEqual({
      email: 'new',
    });
  });

  it('should find all users', async () => {
    repositoryMock.find.mockReturnValue([{}]);
    expect(await service.getAllUsers()).toEqual([{}]);
  });
});
