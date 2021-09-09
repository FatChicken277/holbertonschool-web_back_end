import getBudgetForCurrentYear from './8-getBudgetCurrentYear';

describe('getBudgetForCurrentYear', () => {
  it('should return expected dictionary', () => {
    expect.assertions(1);
    const date = new Date();
    const expected = {};

    expected[`income-${date.getFullYear()}`] = 1;
    expected[`gdp-${date.getFullYear()}`] = 2;
    expected[`capita-${date.getFullYear()}`] = 3;

    expect(getBudgetForCurrentYear(1, 2, 3)).toStrictEqual(expected);
  });
});
