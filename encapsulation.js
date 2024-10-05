class BankAccount {
    customerName;
    accountNumber;
    #balance=0;

    constructor ( name, balance=0 ){
        this.customerName = name;
        this.accountNumber = Date.now() + parseInt(Math.random() * 100);
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance = this.#balance + amount;
    }
    withDraw(amount){
        this.#balance = this.#balance - amount;
    }
}

const accounts = []
// inheritance in class
const obj1 = new BankAccount("John Doe", 3000);
console.log(obj1)
