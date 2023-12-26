export class Register {
    date: string;
    start: string;
    finish: string;
    id: string;
    modified: boolean;

    constructor(id:string, date: string, start: string, finish: string, modified: boolean=false) {
        this.date = date;
        this.start = start;
        this.finish = finish;
        this.id = id;
        this.modified = modified;
    }
}
