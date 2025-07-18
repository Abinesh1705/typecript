export class BankAccount{
    name : string;
    accountNumber : number;
    private balance : number;
 
    constructor(bname : string, baccNo : number , b_balance : number){
        this.name = bname;
        this.accountNumber = baccNo;
        this.balance = b_balance;
    }
 
 
    deposit(amount : number){
        if(amount > 0){
            this.balance += amount;
            console.log(`Amount Deposited : ${amount} - Current Balance : ${this.balance}`);
        }
        else{
            console.log("Please Deposit valid Money");  
        }
       
    }
 
    withdraw(amount : number){
        if(amount > 0)
        {
            this.balance -= amount;
            console.log(`Withdraw Amount : ${amount} - Current Balance : ${this.balance}`);
           
        }
        else{
            console.log("Please Enter the Valid Number");
           
        }
    }
 
    displaybalance(){
        console.log(`${this.name} your Bank Balance is : ${this.balance}`);
       
    }
}