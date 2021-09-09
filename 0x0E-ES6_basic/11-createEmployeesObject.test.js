import createEmployeesObject from './11-createEmployeesObject';

describe('createEmployeesObject', () => {
  it('should return the expected dictionary', () => {
    expect.assertions(1);

    const expected = { Software: ['Bob', 'Sylvie'] };

    expect(createEmployeesObject('Software', ['Bob', 'Sylvie'])).toStrictEqual(expected);
  });
});
