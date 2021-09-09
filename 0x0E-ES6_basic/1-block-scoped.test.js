import taskBlock from './1-block-scoped';

describe('taskBlock', () => {
  it('should return the expected values', () => {
    expect.assertions(2);
    expect(taskBlock(true)).toStrictEqual([false, true]);
    expect(taskBlock(false)).toStrictEqual([false, true]);
  });
});
