export class UserInfo {
    name: string;
    surname: string;
    username: string;
    email: string;
    company: string;

    constructor(name: string, surname: string, username:string, email: string, company: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.company = company;
    }
}
