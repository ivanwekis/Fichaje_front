export class NewUser {
    name: string;
    surname: string;
    dni: string;
    username: string;
    email: string;
    phone: string;
    company: string;
    admin_access: boolean;
    role: string;
    
    constructor(name: string, surname: string, username: string, dni:string, email: string, phone: string, company: string, role: string, admin_access: boolean) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.dni = dni;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.admin_access = admin_access;
        this.role = role;
    }
}