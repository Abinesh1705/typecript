// CLASS IN TYPESCRIPT

class Employee{
    // data member
    empId:number = 4720;
    eName:string = "Dharshini";
    esalary:number = 40000;
    eSingle:boolean = false;

    // constructor
    constructor(id:number,name:string,salary:number,issingle:boolean)
    {
        this.empId= id;
        this.eName = name;
        this.esalary = salary;
        this.eSingle = issingle;
    }

//     // member function

//     employeedetails(){
//         return `ID:${this.empId},NAME:${this.eName},SALARY:${this.esalary},SINGLE : ${this.eSingle}`;
    
//     }
}

// // CREATING CA Object
// let empobj = new Employee(101,"ABINESH",20433,true);
// console.log(empobj.employeedetails());

// let empobj1 = new Employee(103,"Rajesh",30000,true);
// console.log(empobj1.employeedetails());

class Company extends Employee{
    cname : string;
    cAddress : string;

    constructor(id:number,name:string,salary:number,single:boolean,compname:string,compadd:string){
        super(id,name,salary,single);
        this.cname = compname;
        this.cAddress = compadd;
    }

    employeedetails(){
        return `ID:${this.empId},NAME:${this.eName},SALARY:${this.esalary},SINGLE : ${this.eSingle} Company name : ${this.cname} Company Address : ${this.cAddress}`;

   }

};

let companyobj = new Company(201,"Abi",95000,false,"Changepond","Chennai");
console.log(companyobj.employeedetails());


