"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bank_1 = require("./Bank");
var bank = new Bank_1.BankAccount("Abinesh", 23450949, 100000);
bank.deposit(25000);
bank.withdraw(30000);
bank.displaybalance();
