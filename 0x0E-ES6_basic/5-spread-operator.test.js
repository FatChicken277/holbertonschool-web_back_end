import concatArrays from './5-spread-operator';

describe('concatArrays', () => {
  it('should return expected array', () => {
    expect.assertions(1);
    const expected = ['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o'];
    expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toStrictEqual(expected);
  });
});
