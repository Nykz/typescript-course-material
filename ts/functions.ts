// Regular functions

function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(2, 6));

// function expression
const divide = function (a: number, b: number): number {
    return a / b;
};

console.log(divide(8, 2));

// arrow functions
const multiply = (a: number, b: number): number => {
    return a * b;
};
const multiply1 = (a: number, b: number): number => a * b;

console.log(multiply(4, 2));

// optional parameters
function greet(username: string, greeting?: string): string {
    // return greeting + ' ' + username;
    // return `${greeting ? greeting : ''} ${username}`; // ternary operator
    return greeting ? `${greeting} ${username}` : `${username}`; // ternary operator
}

console.log(greet('Nikhil'));


// default parameters
function greet1(username: string, greeting: string = 'Hi'): string {
    // return greeting + ' ' + username;
    return `${greeting} ${username}`; // ternary operator
}

console.log('Greet1: ', greet1('Nikhil', 'Hey'));

// function overloading
function getLength1(value: string): number;
function getLength1(value: any[]): number;
function getLength1(value: any): number {
    return value.length;
}

console.log(getLength1('hello'));
console.log(getLength1([1, 2, 3]));

// Rest parameters
function sum(...numbers: number[]): number {
    // return numbers.reduce((total, num) => {
    //     return total + num;
    // }, 0);
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4));
console.log(sum(5, 7, 3, 4, 10, 100));

function greet12(greeting: string, ...names: string[]): void {
    names.forEach((name) => {
        console.log(`${greeting}, ${name}`);
    });
}

greet12('Hello', 'Nikhil', 'Code with Technyks', 'Everyone');