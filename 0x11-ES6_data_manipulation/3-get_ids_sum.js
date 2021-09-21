export default function getStudentIdsSum(studentList) {
  return studentList.reduce((prev, curr) => curr.id + prev, 0);
}
