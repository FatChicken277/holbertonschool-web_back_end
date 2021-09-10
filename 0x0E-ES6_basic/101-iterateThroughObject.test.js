import iterateThroughObject from './101-iterateThroughObject';

describe('iterateThroughObject', () => {
  it('should return the expected string', () => {
    expect.assertions(1);

    const reportIterator = ['Bob', 'Jane', 'Sylvie'];

    expect(iterateThroughObject(reportIterator)).toStrictEqual('Bob | Jane | Sylvie');
  });
});
