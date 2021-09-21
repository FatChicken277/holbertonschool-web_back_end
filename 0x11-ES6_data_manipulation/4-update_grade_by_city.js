export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsByCity = studentList.filter((student) => student.location === city);

  return studentsByCity.map((student) => {
    const updatedStudent = student;
    const newGrade = newGrades.filter((grade) => grade.studentId === student.id);

    if (newGrade.length > 0) {
      updatedStudent.grade = newGrade[0].grade;
    } else {
      updatedStudent.grade = 'N/A';
    }

    return updatedStudent;
  });
}
