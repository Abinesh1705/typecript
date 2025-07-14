var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(id, name, salary) {
        this.Employee_ID = id;
        this.Employee_Name = name;
        this.Employee_salary = salary;
    }
    EmployeeSalary.prototype.hra = function () {
        var hra_salary = 0.20 * this.Employee_salary;
        return hra_salary;
    };
    EmployeeSalary.prototype.da = function () {
        var da_salary = 0.10 * this.Employee_salary;
        return da_salary;
    };
    EmployeeSalary.prototype.Gross_salary = function () {
        return this.Employee_salary + this.hra() + this.da();
    };
    return EmployeeSalary;
}());
var empObj = new EmployeeSalary(1, "Abinesh", 20000);
console.log("House Rent Allowance : ".concat(empObj.hra()));
console.log("Dearness Allowance : ".concat(empObj.da()));
console.log("GROSS SALARY : ".concat(empObj.Gross_salary()));
