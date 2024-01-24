export class UserInfo {
    name: string;
    surname: string;
    phone: string;
    role: string;
    dni: string;
    username: string;
    email: string;
    company: string;

    constructor(data: Partial <UserInfo>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.phone = data.phone || '';
        this.role = data.role || '';
        this.dni = data.dni || '';
        this.username = data.username || '';
        this.email = data.email || '';
        this.company = data.company || '';
    }
}
