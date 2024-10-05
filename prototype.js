function BankAccount( name,balance=0){
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
const JohnAccount = new BankAccount('John Doe',4000)
const ShaunAccount = new BankAccount('Shaoun Doe')
accounts.push(JohnAccount);
JohnAccount.deposit(200)
// accounts.push(ShaunAccount);
console.log(accounts)

////////////////// account create form //////////////////////////
const createAccountForm = document.querySelector('#create-account');
const accName = document.querySelector('#name')
const accBalance = document.querySelector('#balance')
// console.log(createAccountForm)

createAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('create account')
    let newAccount = new BankAccount(accName.value,+accBalance.value);
    accounts.push(newAccount);
    console.log("after create account",accounts);
});

/////////////////// deposit form ///////////////////////////
const DepositForm = document.querySelector('#deposit-account');
const accoutNumber = document.querySelector('#account-number');
const depoistBal = document.querySelector("#depoist-balance");

DepositForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let account = accounts.find( (account) => +accoutNumber.value === account.accountNumber);
    // console.log(account)
    if ( account ) {
        account.deposit(+depoistBal.value);
        // console.log(account)
        console.log(accounts)
    }
    
})

///// Withdraw form //////////////

const withdrawForm = document.querySelector('#withdraw-account');
const wdAccoutNumber = document.querySelector('#w-account-number');
const wdBal = document.querySelector("#w-balance");

withdrawForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    let account = accounts.find( (acnt) => acnt.accountNumber === +wdAccoutNumber.value);
    if( account ){
        account.withdraw(+wdBal.value);
        // console.log(account)
        console.log('aftr withdraw ',accounts)
    }
})