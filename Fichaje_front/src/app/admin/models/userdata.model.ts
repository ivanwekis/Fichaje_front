export class UserData {
    name: string;
    surname: string;
    email: string;
    id: any;

    constructor(data: Partial <UserData>) {
        this.name = data.name || '';
        this.surname = data.surname || '';
        this.email = data.email || '';
        this.id = data.id || '';
    }
}