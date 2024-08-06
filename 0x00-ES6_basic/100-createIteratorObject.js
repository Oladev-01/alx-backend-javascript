export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeesArray = [];

  for (const department of Object.values(allEmployees)) {
    for (const employee of department) {
      employeesArray.push(employee);
    }
  }
  return employeesArray;
}
