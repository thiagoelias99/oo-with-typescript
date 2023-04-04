import Admin from "./models/Admin";
import Teacher from "./models/Teacher";
import Student from "./models/Student";

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

console.log(sara.showInformations());
console.log(Admin.description());
console.log(ana.createCourse("Math",1));
console.log(bia.approveStudent("Sara", "Math"));
