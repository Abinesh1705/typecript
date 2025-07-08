
export let myname : string = "Abinesh";

export class person{
    pname : string;
    pid:number;

    constructor(name:string,id:number){
        this.pname = name;
        this.pid = id;
    }

    pdetails()
    {
        return `NAME : ${this.pname} ID : ${this.pid}`
    }

}