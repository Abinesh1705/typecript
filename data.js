"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = exports.myname = void 0;
exports.myname = "Abinesh";
var person = /** @class */ (function () {
    function person(name, id) {
        this.pname = name;
        this.pid = id;
    }
    person.prototype.pdetails = function () {
        return "NAME : ".concat(this.pname, " ID : ").concat(this.pid);
    };
    return person;
}());
exports.person = person;
