import createReportObject from './12-createReportObject';

describe('createReportObject', () => {
  it('should return the expected object', () => {
    expect.assertions(2);

    const employees = { Software: ['Bob', 'Sylvie'] };
    const report = createReportObject(employees);

    expect(report.allEmployees).toStrictEqual(employees);
    expect(report.getNumberOfDepartments(employees)).toStrictEqual(1);
  });
});
