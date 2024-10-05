"use strict"

// 1 what is undefined ?
/// undefined means, variable has been declared but not assgined a value ///
console.log(x);
var x=3;

////////////////// ///////////////////////////////
// 2. not defined ?
/// not defined means, a variable you are trying to use but not declared.

// console.log(y) 

// 3 what is null ?
// Null is special type value in js, Where we assign value Null it indicated absence of data.
var z = null;
// console.log(z)
// typeof z // object

//////////// //////////////////
// 4. Hoisting ?
// When we run javascript file then javascript engine 
// It's a mechanism where variables and general function declartion are moved to the top of the scope.
// or we can say that we can get the variable and function before declaration.
// before the code executing

// console.log(a);
// var a =10

// Are javascript initialization hoisted ?
// No.

//////////////  //////////////
// 6. what is use strict
"use strict" is to indicate that the code should be executed in "strict mode".
// "use strict" checks if the variable is defined using "var" keyword

let bb = 10;
// console.log(bb)

// 7. Closures ?
// Closures are functions inside function and it makes a normal function stateful.

// example clousre

// function simpleFunction() {
//     var x = 0;
//     x++;
//     return x;
// }

// console.log( simpleFunction() );

// console.log( simpleFunction() );
// function clsFn(){
//     var i = 0;
//     function increment(){
//         i++;
//     }
//     return {
//         increment
//     }
    
// }
// var clsFnref = clsFn();
// var dd = clsFnref.increment();
// console.log( dd );
// console.log(  dd ); 

function BankAccount( name,balance=0){
    this.name = name;
    this.accountNumber = Date.now() + parseInt(Math.random() * 100);
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance = this.balance + amount
    }
    this.withdraw = (amount) => {
        this.balance = this.balance - amount;
    }

}


let accounts = [];
const JohnAccount = new BankAccount('John Doe',4000)
const ShaunAccount = new BankAccount('Shaoun Doe')
accounts.push(JohnAccount);
accounts.push(ShaunAccount);
// console.log(accounts)

// ShaunAccount.deposit(6000)
// ShaunAccount.deposit(1000)
// ShaunAccount.withdraw(1500)

// console.log(ShaunAccount)





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
    
});



/////// Withdraw form //////////////

const withdrawForm = document.querySelector('#withdraw-account');
const wdAccoutNumber = document.querySelector('#w-account-number');
const wdBal = document.querySelector("#w-balance");

withdrawForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    let account = accounts.find( (acnt) => acnt.accountNumber === +wdAccoutNumber.value );
    if( account ){
        account.withdraw(+wdBal.value);
        // console.log(account)
        console.log('after withdraw ',accounts)
    }
})

const arr = [1,4,5,6,9];

const getSumArray = arr.reduce( (acc, item) => acc+item, 0)
console.log(getSumArray);

var total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}

Q1: Prototype ?
Ans: When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds
 a link to another object called its prototype.

create a polyfill for map in js

Q2: cancel a web worker method?
Ans: terminate() The terminate() method of the Worker interface immediately terminates the Worker .



Q2: How many web workers and workers can run concurrently?
Ans: A web worker is a JavaScript program, running on a different thread, in parallel with main thread. The browser 
creates one thread per tab. The main thread can spawn an unlimited number of web workers, 
until the users system resources are fully consumed.
