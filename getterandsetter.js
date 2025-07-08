var User = /** @class */ (function () {
    function User() {
        this.userid = "raj1@gmail.com";
        this.upass = "raj@123";
    }
    Object.defineProperty(User.prototype, "_userid", {
        get: function () {
            return this.userid;
        },
        set: function (val) {
            this.userid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_upass", {
        get: function () {
            return this.upass;
        },
        set: function (val) {
            this.upass = val;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.userdetails = function () {
        return "USERID : ".concat(this.userid, " PASSWORK : ").concat(this.upass);
    };
    return User;
}());
var uobj = new User();
console.log(uobj.userdetails());
uobj._userid = "abi1714@gmail.com";
uobj._upass = "abi@1234";
console.log(uobj._userid);
console.log(uobj._upass);
