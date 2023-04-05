import { Admin, Teacher, Student } from "./models/";

const sara = new Student(
    "Sara",
    "sara@email.com",
    new Date("2000-01-25"),
);

const ana = new Admin(
    "Ana",
    "ana@email.com",
    new Date("2000-12-25"),
);

const bia = new Teacher(
    "Bia",
    "bia@email.com",
    new Date("2098-05-17"),
);

console.log(sara.showInformation());
console.log(Admin.description());
console.log(ana.createCourse("Math", 1));
console.log(bia.approveStudent("Sara", "Math"));
console.log(sara.name);