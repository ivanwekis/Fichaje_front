import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SideBarService {
    public father:string;
    
    constructor() { }

    setFather(father:string){
        this.father = father;
    }
}
