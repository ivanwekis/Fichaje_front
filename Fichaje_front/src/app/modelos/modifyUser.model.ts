export class ModifyUser {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    company: string;

    constructor(name: string, surname: string, username: string, email: string, password: string, company: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.company = company;
    }
}
