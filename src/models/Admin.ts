import User from "./User";

export class Admin extends User {
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

    set active(isActive: boolean){
        this.__active = isActive;
    }

    set role(newRole: string){
        this.__role = newRole;
    }

    static description(){
        return "The user admin can create new courses";
    }
}