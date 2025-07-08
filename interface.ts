// INTERFACE 

interface Iperson{
    personDetails();
}

class Company implements Iperson{
    pname:string;
    pcontact : number;
    paddress : string;

    constructor(name:string,contact:number,address:string)
    {
        this.pname = name;
        this.pcontact = contact;
        this.paddress= address;
    }

    personDetails() {
        return `Name :${this.pname} Contact : ${this.pcontact} Address : ${this.paddress}`
    }
}

let CompanyOBJ = new Company("ABINESH",6372784,"Chennai"); 
console.log(CompanyOBJ.personDetails());
