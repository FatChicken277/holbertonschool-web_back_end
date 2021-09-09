import { taskFirst, getLast, taskNext } from './0-constants';

describe('taskFirst', () => {
  it('should return the expected text', () => {
    expect.assertions(1);
    expect(taskFirst()).toStrictEqual('I prefer const when I can.');
  });
});

describe('getLast', () => {
  it('should return the expected text', () => {
    expect.assertions(1);
    expect(getLast()).toStrictEqual(' is okay');
  });
});

describe('taskNext', () => {
  it('should return the combination of taskFirst and getLast', () => {
    expect.assertions(1);
    expect(taskNext()).toStrictEqual('But sometimes let is okay');
  });
});
