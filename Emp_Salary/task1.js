var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(id, name, salary) {
        this.Employee_ID = id;
        this.Employee_Name = name;
        this.Employee_salary = salary;
    }
    EmployeeSalary.prototype.hra = function () {
        return 0.20 * this.Employee_salary;
    };
    EmployeeSalary.prototype.da = function () {
        return 0.10 * this.Employee_salary;
    };
    EmployeeSalary.prototype.Gross_salary = function () {
        return this.Employee_salary + this.hra() + this.da();
    };
    EmployeeSalary.prototype.displaydetails = function () {
        console.log("BASIC SALARY : ".concat(this.Employee_salary));
        console.log("HOUSE RENT ALLOWANCE : ".concat(this.hra()));
        console.log("DEARNESS ALLOWANCE : ".concat(this.da()));
        console.log("GROSS SALARY : ".concat(this.Gross_salary()));
    };
    return EmployeeSalary;
}());
var empObj = new EmployeeSalary(1, "Abinesh", 20000);
empObj.displaydetails();
