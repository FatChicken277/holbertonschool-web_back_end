import listOfStudents from './9-hoisting';

const listPrinted = listOfStudents.map((student) => student.fullStudentDescription);

console.log(listOfStudents);
console.log(listPrinted);
