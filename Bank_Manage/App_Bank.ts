import { BankAccount } from "./Bank";
let bank = new BankAccount("Abinesh",23450949,100000);
 
bank.deposit(25000);
 
bank.withdraw(30000)
 
bank.displaybalance();