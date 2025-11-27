// Task 1 — Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Task 2 — Directors extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Task 3 — printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Task 3 — printTeacher implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Task 4 — Interfaces describing Student class + constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Task 4 — StudentClass implementation
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ---- TESTING OUTPUT (Optional for you) ----
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(printTeacher("John", "Doe"));  // J. Doe
console.log(director1);

const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName());        // Alice
console.log(student.workOnHomework());     // Currently working
