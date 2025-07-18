"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(bname, baccNo, b_balance) {
        this.name = bname;
        this.accountNumber = baccNo;
        this.balance = b_balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("Amount Deposited : ".concat(amount, " - Current Balance : ").concat(this.balance));
        }
        else {
            console.log("Please Deposit valid Money");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0) {
            this.balance -= amount;
            console.log("Withdraw Amount : ".concat(amount, " - Current Balance : ").concat(this.balance));
        }
        else {
            console.log("Please Enter the Valid Number");
        }
    };
    BankAccount.prototype.displaybalance = function () {
        console.log("".concat(this.name, " your Bank Balance is : ").concat(this.balance));
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
