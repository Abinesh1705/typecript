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
         return 0.20*this.Employee_salary;
        
    }

    da(){
        return 0.10*this.Employee_salary;
        
    }

    Gross_salary(){
        return this.Employee_salary + this.hra() + this.da();
    }
    
    displaydetails() {
        console.log(`BASIC SALARY : ${this.Employee_salary}`);
        console.log(`HOUSE RENT ALLOWANCE : ${this.hra()}`);
        console.log(`DEARNESS ALLOWANCE : ${this.da()}`);
        console.log(`GROSS SALARY : ${this.Gross_salary()}`);
        
    }

}

let empObj = new EmployeeSalary(1,"Abinesh",20000);
empObj.displaydetails();

