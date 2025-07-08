// INTERFACE 
var Company = /** @class */ (function () {
    function Company(name, contact, address) {
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
    }
    Company.prototype.personDetails = function () {
        return "Name :".concat(this.pname, " Contact : ").concat(this.pcontact, " Address : ").concat(this.paddress);
    };
    return Company;
}());
var CompanyOBJ = new Company("ABINESH", 6372784, "Chennai");
console.log(CompanyOBJ.personDetails());
