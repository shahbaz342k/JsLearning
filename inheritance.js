/* function BankAccount( name,balance=0){
    this.name = name;
    this.accountNumber = Date.now() + parseInt(Math.random() * 100);
    this.balance = balance;

}
BankAccount.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance = this.balance - amount;
}
const accounts = [];

// //////////////////// Saving account constructor ////////////////

function SavingAccount(customerName, balance=0) {

    BankAccount.call(this, customerName,balance)
    this.transactionLimit = 10000;

}
SavingAccount.prototype = Object.create(BankAccount.prototype)
const JohnAccount = new SavingAccount('John Doe', 2000);

JohnAccount.deposit(2888)
console.log(JohnAccount)
// console.log( JohnAccount.transactionLimit )

// //////////////////// Current account constructor ////////////////

function CurrentAccount(customerName, balance=0) {
    BankAccount.call(this, customerName, balance)
    this.transactionLimit = 50000;
}
CurrentAccount.prototype = Object.create(BankAccount.prototype)

const CurrentAccountObj = new CurrentAccount('Jofra Doe', 345);
CurrentAccountObj.deposit(9878)
console.log(CurrentAccountObj) */


class BankAccount {
    customerName;
    accountNumber;
    balance=0;

    constructor ( name, balance=0 ){
        this.customerName = name;
        this.accountNumber = Date.now() + parseInt(Math.random() * 100);
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withDraw(amount){
        this.balance = this.balance - amount;
    }
}

const accounts = []
// inheritance in class
class CurrentAccount extends BankAccount{
    transactionLimit = 50000;
    constructor(name,balance){
        super(name,balance)
    }

    businessLoan(amount) {
        console.log('business loan is ' + amount)
    }

}

const joeaccount = new BankAccount("Jon Doe", 21500)
const Obj2Current = new CurrentAccount("Ons Doe", 1000)
console.log(joeaccount)
console.log(Obj2Current)
Obj2Current.businessLoan(90000)

accounts.push(joeaccount)
accounts.push(Obj2Current)
// Saving Account
class SavingAccount extends BankAccount{
    transactionLimit = 20000;
    constructor(name, balance){
        super(name, balance)
    }
    personalLoan(amount){
        console.log('personal loan is ' + amount)
    }
}

const ObjSavingAccnt = new SavingAccount("Koes Stys", 4000)
accounts.push(ObjSavingAccnt)
console.log(ObjSavingAccnt)
ObjSavingAccnt.personalLoan(15000)
console.log(accounts)

const dd = accounts.map( (acnt) => acnt.balance += 4000 )
console.log(accounts)