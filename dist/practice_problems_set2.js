"use strict";
class BankAccount {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new BankAccount("4321ABC34324", 1000);
myAccount.deposit(500);
myAccount.withdraw(1500);
myAccount.deposit(100);
console.log(myAccount.getBalance());
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `Employee: ${this.name}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getDetails() {
        return `Manager ${this.name}, Salary: ${this.salary}, Department: ${this.department}`;
    }
}
const emp = new Employee('Diya', 50000);
const mgr = new Manager('Prem', 60000, 'IT');
console.log(emp.getDetails());
console.log(mgr.getDetails());
//# sourceMappingURL=practice_problems_set2.js.map