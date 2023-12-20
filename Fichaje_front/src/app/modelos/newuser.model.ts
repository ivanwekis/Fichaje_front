export class NewUser {
    name: string;
    surname: string;
    user: string;
    email: string;
    password: string;
    company: string;

    constructor(name: string, surname: string, user: string, email: string, password: string, company: string) {
        this.name = name;
        this.surname = surname;
        this.user = user;
        this.email = email;
        this.password = password;
        this.company = company;
    }
}
