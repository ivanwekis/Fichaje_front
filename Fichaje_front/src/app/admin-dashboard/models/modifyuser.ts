export class ModifyUser {
    name: string;
    surname: string;
    email: string;
    dni: string;
    username: string;
    old_username: string;
    old_email: string;
    phone: string;
    company: string;
    admin_access: boolean;
    last_register: string;
    role: string;
    id: any;

    constructor(data: Partial <ModifyUser>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.username = data.username || '';
        this.dni = data.dni || '';
        this.old_username = data.old_username || '';
        this.old_email = data.old_email || '';
        this.email = data.email || '';
        this.id = data.id || '';
        this.phone = data.phone || '';
        this.company = data.company || '';
        this.last_register = data.last_register || '';
        this.role = data.role || '';
        this.admin_access = data.admin_access || false;
    }
}