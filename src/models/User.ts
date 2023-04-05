export default abstract class User {
    constructor(
        readonly name: string,
        private _email: string,
        readonly _birthDate: Date,
        protected __role: string,
        protected __active = true
    ) { }

    get email(){
        return this._email;
    }

    get active(){
        return this.__active;
    }

    showInformation(){
        return `${this.name}, ${this.email}`;
    }
}