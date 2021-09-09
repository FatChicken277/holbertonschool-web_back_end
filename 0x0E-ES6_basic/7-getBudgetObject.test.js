import getBudgetObject from './7-getBudgetObject';

describe('getBudgetObject', () => {
  it('should return expected dictionary', () => {
    expect.assertions(1);
    const expected = {
      income: 1,
      gdp: 2,
      capita: 3,
    };
    expect(getBudgetObject(1, 2, 3)).toStrictEqual(expected);
  });
});
