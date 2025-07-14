class EmployeeSalary{
    Employee_ID: number;
    Employee_Name : string;
    Employee_salary : number;

    constructor(id:number, name:string, salary:number){
        this.Employee_ID = id;
        this.Employee_Name = name;
        this.Employee_salary = salary ;
    }

    hra(){
         let hra_salary:number= 0.20*this.Employee_salary;
         return hra_salary;
    }

    da(){
        let da_salary : number = 0.10*this.Employee_salary;
        return da_salary;
    }

    Gross_salary(){
        return this.Employee_salary + this.hra() + this.da();
    }

}

let empObj = new EmployeeSalary(1,"Abinesh",20000);
console.log(`House Rent Allowance : ${empObj.hra()}`);
console.log(`Dearness Allowance : ${empObj.da()}`);
console.log(`GROSS SALARY : ${empObj.Gross_salary()}`);

