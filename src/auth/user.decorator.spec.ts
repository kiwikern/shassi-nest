import { userDecoratorFactory } from './user.decorator';

describe('UserDecorator', () => {

  it('should extract the user', () => {
    expect(userDecoratorFactory(null, { user: 'user' })).toBe('user');
  });

});
