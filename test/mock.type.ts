export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

export type PartialMockType<T> = {
  [P in keyof Partial<T>]: Partial<jest.Mock<{}>>;
};
