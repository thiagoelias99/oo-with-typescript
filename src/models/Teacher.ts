import User from "./User";

export default class Teacher extends User {
    constructor(
        name: string,
        email: string,
        birthDate: Date,
        role = "teacher",
    ) {
        super(name, email, birthDate, role);
    }

    approveStudent(studentName: string, courseName: string) {
        return `Student ${studentName} approved in ${courseName} course.`;
    }
}