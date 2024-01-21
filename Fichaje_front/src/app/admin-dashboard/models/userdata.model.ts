export class UserData {
    name: string;
    surname: string;
    email: string;
    username: string;
    phone: string;
    company: string;
    admin_access: boolean;
    role: string;
    id: any;

    constructor(data: Partial <UserData>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.username = data.username || '';
        this.email = data.email || '';
        this.id = data.id || '';
        this.phone = data.phone || '';
        this.company = data.company || '';
        this.role = data.role || '';
        this.admin_access = data.admin_access || false;
    }
}