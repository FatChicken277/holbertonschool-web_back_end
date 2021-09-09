import createIteratorObject from './100-createIteratorObject';
import createReportObject from './12-createReportObject';

describe('createIteratorObject', () => {
  it('should return the expected array', () => {
    expect.assertions(1);

    const employees = {
      Software: ['Bob', 'Jane'],
      Marketing: ['Sylvie'],
    };

    const report = createReportObject(employees);

    expect(createIteratorObject(report)).toStrictEqual(['Bob', 'Jane', 'Sylvie']);
  });
});
