import appendToEachArrayValue from './10-loops';

describe('appendToEachArrayValue', () => {
  it('should return the expected array', () => {
    expect.assertions(1);

    const expected = [
      'correctly-appended',
      'correctly-fixed',
      'correctly-displayed',
    ];

    expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toStrictEqual(expected);
  });
});
