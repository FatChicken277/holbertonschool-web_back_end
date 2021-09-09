import getSumOfHoods from './3-default-parameter';

describe('getSumOfHoods', () => {
  it('should return the expected value', () => {
    expect.assertions(4);
    expect(getSumOfHoods()).toBeNaN();
    expect(getSumOfHoods(1)).toStrictEqual(109);
    expect(getSumOfHoods(1, 2)).toStrictEqual(22);
    expect(getSumOfHoods(1, 2, 3)).toStrictEqual(6);
  });
});
