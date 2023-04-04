export default abstract class User {
    constructor(
        public name: string,
        public email: string,
        public birthDate: Date,
        public role: string,
        public ative = true
    ) { }

    showInformations(){
        return `${this.name}, ${this.email}`;
    }
}