export default function createIteratorObject(report) {
  const allEmployeesList = [];

  for (const employeesList of Object.values(report.allEmployees)) {
    allEmployeesList.push(...employeesList);
  }

  return allEmployeesList;
}
