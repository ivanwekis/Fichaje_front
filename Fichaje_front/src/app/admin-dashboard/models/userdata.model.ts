export class UserData {
    name: string;
    surname: string;
    email: string;
    username: string;
    id: any;

    constructor(data: Partial <UserData>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.username = data.username || '';
        this.email = data.email || '';
        this.id = data.id || '';
    }
}