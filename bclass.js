class BankAccount {

    name;
    accountNumber;
    balance=0;

    constructor( name, balance=0 ){
        this.name = name;
        this.accountNumber = Date.now() + parseInt(Math.random() * 100);
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        this.balance = this.balance - amount;
    }

    
}
const accounts = [];
const JohnAccount = new BankAccount('John Doe',4000)
accounts.push(JohnAccount);
JohnAccount.deposit(300);
console.log(JohnAccount);


// hello()
function hello(){
    console.log('hello')
}
