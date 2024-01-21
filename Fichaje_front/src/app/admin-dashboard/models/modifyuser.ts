export class ModifyUser {
    name: string;
    surname: string;
    email: string;
    username: string;
    old_username: string;
    old_email: string;
    phone: string;
    company: string;
    admin_access: boolean;
    role: string;
    id: any;

    constructor(data: Partial <ModifyUser>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.username = data.username || '';
        this.old_username = data.old_username || '';
        this.old_email = data.old_email || '';
        this.email = data.email || '';
        this.id = data.id || '';
        this.phone = data.phone || '';
        this.company = data.company || '';
        this.role = data.role || '';
        this.admin_access = data.admin_access || false;
    }
}