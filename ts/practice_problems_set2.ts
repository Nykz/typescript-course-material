/*
1.Create a Bank Account Class: Write a BankAccount class with the following properties:

    accountNumber: string
    balance: number (private)
    The class should have methods:

    deposit(amount: number): void (to add to balance)
    withdraw(amount: number): void (to subtract from balance)
    getBalance(): number (to return current balance)
*/

class BankAccount {
  private balance: number;

  constructor(public accountNumber: string, initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount; // this.balance = this.balance + amount
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount("4321ABC34324", 1000);
myAccount.deposit(500);
myAccount.withdraw(1500);
myAccount.deposit(100);
console.log(myAccount.getBalance());

/*
2. Create an Employee Class with Inheritance: 
    Define an Employee class with properties name and salary. 
    Create a subclass Manager that adds a department property. 
    Both classes should have a getDetails method that returns 
    a string with the employee's details.
*/

class Employee {
  // readonly username: string;
  constructor(public name: string, public salary: number) {
    // this.username = 'sdaf';
  }

  getDetails(): string {
    return `Employee: ${this.name}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, public department: string) {
    super(name, salary);
  }

  getDetails(): string {
    return `Manager ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
  }
}

const emp = new Employee('Diya', 50000);
const mgr = new Manager('Prem', 60000, 'IT');

console.log(emp.getDetails());
console.log(mgr.getDetails());
