export class UserData {
    name: string;
    surname: string;
    dni: string;
    email: string;
    username: string;
    phone: string;
    company: string;
    admin_access: boolean;
    role: string;
    last_register: string;
    id: any;

    constructor(data: Partial <UserData>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.dni = data.dni || '';
        this.username = data.username || '';
        this.email = data.email || '';
        this.id = data.id || '';
        this.phone = data.phone || '';
        this.company = data.company || '';
        this.role = data.role || '';
        this.last_register = data.last_register || '';
        this.admin_access = data.admin_access || false;
    }
}