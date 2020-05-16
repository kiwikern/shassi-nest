import { userDecoratorFactory } from './user.decorator';

describe('UserDecorator', () => {

  it('should extract the user', () => {
    expect(userDecoratorFactory(null, { switchToHttp: () => ({ getRequest: () => ({ user: 'user' }) }) } as any))
      .toBe('user');
  });

});
