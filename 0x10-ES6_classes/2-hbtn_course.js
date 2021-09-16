function checkNameType(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
}

function checkLengthType(length) {
  if (typeof length !== 'number') {
    throw new TypeError('Length must be a number');
  }
}

function checkStudentsType(object) {
  if (typeof object !== 'object') {
    throw new TypeError('Students must be a object');
  }
}
export default class HolbertonCourse {
  constructor(name, length, students) {
    checkNameType(name);
    checkLengthType(length);
    checkStudentsType(students);

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    checkNameType(val);
    this._name = val;
  }

  get length() {
    return this._length;
  }
  set length(val) {
    checkLengthType(val);
    this._length = val;
  }

  get students() {
    return this._students;
  }
  set students(val) {
    checkStudentsType(val);
    this._students = val;
  }
}
