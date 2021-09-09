import returnHowManyArguments from './4-rest-parameter';

describe('returnHowManyArguments', () => {
  it('should return the expected number of arguments', () => {
    expect.assertions(1);
    expect(returnHowManyArguments('asd', 'fgh', 'jkl')).toStrictEqual(3);
  });
});
