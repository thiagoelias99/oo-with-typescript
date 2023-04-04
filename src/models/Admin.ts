import User from "./User";

export default class Admin extends User {
    constructor(
        name: string,
        email: string,
        birthDate: Date,
        role = "administrator",
    ) {
        super(name, email, birthDate, role);
    }

    createCourse(courseName: string, vacancies: number) {
        return `Course ${courseName} created with ${vacancies} vacancies.`;
    }

    static description(){
        return "The user admin can create new courses";
    }
}