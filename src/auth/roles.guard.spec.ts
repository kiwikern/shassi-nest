import { RolesGuard } from './roles.guard';
import { MockType } from '../../test/mock.type';
import { Reflector } from '@nestjs/core';
import { ExecutionContext, Logger } from '@nestjs/common';
import { executionContextFactory, reflectorFactory } from '../../test/mocks/jest-mocks';
import { NoOpLogger } from '../../test/mocks/no-op-logger';

describe('RolesGuard', () => {

  let rolesGuard: RolesGuard;
  let reflectorMock: MockType<Reflector>;
  let executionContextMock: MockType<ExecutionContext>;
  let requestMock;

  beforeEach(() => {
    Logger.overrideLogger(new NoOpLogger());
    reflectorMock = reflectorFactory();
    rolesGuard = new RolesGuard(reflectorMock as Reflector);
    requestMock = {
      user: null,
    };
    executionContextMock = executionContextFactory();
    executionContextMock.switchToHttp.mockReturnValue({ getRequest: () => requestMock });
  });

  it('should return true with empty array of required roles', () => {
    reflectorMock.get.mockReturnValueOnce([]);
    reflectorMock.get.mockReturnValueOnce([]);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(true);
  });

  it('should return true without any required roles', () => {
    reflectorMock.get.mockReturnValueOnce(null);
    reflectorMock.get.mockReturnValueOnce(null);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(true);
  });

  it('should return false for missing user', () => {
    reflectorMock.get.mockReturnValueOnce(['admin']);
    reflectorMock.get.mockReturnValueOnce(null);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(false);
  });

  it('should return true for one granted method role', () => {
    requestMock.user = { roles: ['admin'] };
    reflectorMock.get.mockReturnValueOnce(['admin']);
    reflectorMock.get.mockReturnValueOnce(null);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(true);
  });

  it('should return true for one granted class role', () => {
    requestMock.user = { roles: ['admin'] };
    reflectorMock.get.mockReturnValueOnce(null);
    reflectorMock.get.mockReturnValueOnce(['admin']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(true);
  });

  it('should return false for one missing role', () => {
    requestMock.user = { roles: ['user'] };
    reflectorMock.get.mockReturnValueOnce(['admin']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(false);
  });

  it('should return false for user without roles', () => {
    requestMock.user = { roles: [] };
    reflectorMock.get.mockReturnValueOnce(['admin']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(false);
  });

  it('should return false for user with null roles', () => {
    requestMock.user = { roles: null };
    reflectorMock.get.mockReturnValueOnce(['user']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(false);
  });

  it('should return true with multiple roles', () => {
    requestMock.user = { roles: ['admin', 'user'] };
    reflectorMock.get.mockReturnValueOnce(['admin', 'pro']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(true);
  });

  it('should return true with multiple roles from class and method', () => {
    requestMock.user = { roles: ['admin', 'user'] };
    reflectorMock.get.mockReturnValueOnce(['admin']);
    reflectorMock.get.mockReturnValueOnce(['pro']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(true);
  });

  it('should return false with multiple roles', () => {
    requestMock.user = { roles: ['user'] };
    reflectorMock.get.mockReturnValueOnce(['admin']);
    reflectorMock.get.mockReturnValueOnce(['pro']);
    expect(rolesGuard.canActivate(executionContextMock as unknown as ExecutionContext)).toBe(false);
  });
});
