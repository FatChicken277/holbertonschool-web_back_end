export default function getListStudentIds(studentList) {
  if (typeof studentList !== 'object') {
    return [];
  }

  return studentList.map((student) => student.id);
}
