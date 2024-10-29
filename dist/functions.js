"use strict";
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(2, 6));
const divide = function (a, b) {
    return a / b;
};
console.log(divide(8, 2));
const multiply = (a, b) => {
    return a * b;
};
const multiply1 = (a, b) => a * b;
console.log(multiply(4, 2));
function greet(username, greeting) {
    return greeting ? `${greeting} ${username}` : `${username}`;
}
console.log(greet('Nikhil'));
function greet1(username, greeting = 'Hi') {
    return `${greeting} ${username}`;
}
console.log('Greet1: ', greet1('Nikhil', 'Hey'));
function getLength1(value) {
    return value.length;
}
console.log(getLength('hello'));
console.log(getLength([1, 2, 3]));
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));
console.log(sum(5, 7, 3, 4, 10, 100));
function greet12(greeting, ...names) {
    names.forEach((name) => {
        console.log(`${greeting}, ${name}`);
    });
}
greet12('Hello', 'Nikhil', 'Code with Technyks', 'Everyone');
//# sourceMappingURL=functions.js.map