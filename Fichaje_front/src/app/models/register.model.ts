export class Register {
    date: string;
    start: string;
    finish: string;
    string_id: string;
    modified: boolean;

    constructor(string_id:string, date: string, start: string, finish: string, modified: boolean=false) {
        this.date = date;
        this.start = start;
        this.finish = finish;
        this.string_id = string_id;
        this.modified = modified;
    }
}
