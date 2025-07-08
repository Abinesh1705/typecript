// CLASS IN TYPESCRIPT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    // constructor
    function Employee(id, name, salary, issingle) {
        // data member
        this.empId = 4720;
        this.eName = "Dharshini";
        this.esalary = 40000;
        this.eSingle = false;
        this.empId = id;
        this.eName = name;
        this.esalary = salary;
        this.eSingle = issingle;
    }
    return Employee;
}());
// // CREATING CA Object
// let empobj = new Employee(101,"ABINESH",20433,true);
// console.log(empobj.employeedetails());
// let empobj1 = new Employee(103,"Rajesh",30000,true);
// console.log(empobj1.employeedetails());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, salary, single, compname, compadd) {
        var _this = _super.call(this, id, name, salary, single) || this;
        _this.cname = compname;
        _this.cAddress = compadd;
        return _this;
    }
    Company.prototype.employeedetails = function () {
        return "ID:".concat(this.empId, ",NAME:").concat(this.eName, ",SALARY:").concat(this.esalary, ",SINGLE : ").concat(this.eSingle, " Company name : ").concat(this.cname, " Company Address : ").concat(this.cAddress);
    };
    return Company;
}(Employee));
;
var companyobj = new Company(201, "Abi", 95000, false, "Changepond", "Chennai");
console.log(companyobj.employeedetails());
