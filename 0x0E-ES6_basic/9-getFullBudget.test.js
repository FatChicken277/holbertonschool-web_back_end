import getFullBudgetObject from './9-getFullBudget';

describe('getFullBudgetObject', () => {
  it('should return expected value', () => {
    expect.assertions(5);

    const fullBudget = getFullBudgetObject(6, 2, 3);

    expect(fullBudget.income).toStrictEqual(6);
    expect(fullBudget.gdp).toStrictEqual(2);
    expect(fullBudget.capita).toStrictEqual(3);
    expect(fullBudget.getIncomeInDollars(1)).toStrictEqual('$1');
    expect(fullBudget.getIncomeInEuros(1)).toStrictEqual('1 euros');
  });
});
