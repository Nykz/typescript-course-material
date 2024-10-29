let num = 12345645646;
let num1 = 12344354355464566456636666456345655436n;
console.log('num: ', num);
console.log('num1: ', num1);
let character = 'Code with Technyks';
let isAvailable = true;
let val = null;
let obj = {
    name: 'Abc',
    age: 10
};
obj = { ...obj, age: 44, name: 'abc1' };
console.log(obj);
let numVal;
numVal = 1;
numVal = 'a';
function testAnyType(val) {
    console.log(val);
}
let numArray = [1, 2, 3, 4];
let charArray = ['a', 'b'];
let arr = [1, 'Alice'];
let coordinates3D = [10, 20, 30];
let userData = ['Technyks', 1234567890];
let response = [200, "Success"];
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
console.log(Color.Blue);
let color = Color.Green;
console.log(color);
let size = 3;
console.log('size: ', size);
let notSure = 'a';
if (typeof (notSure) === 'number') {
    notSure.toFixed(2);
}
else if (typeof (notSure) === 'string') {
    notSure.length;
}
function infiniteLoop() {
    while (true) {
        console.log(1);
    }
}
function throwError(message) {
    throw new Error(message);
}
function logMessage(message) {
    console.log(message);
}
let username = 'Nikhil';
let someValue = 'Hello world';
let strLength = someValue.length;
console.log(strLength);
let id;
id = 'abc';
id = 101;
function printId(id) {
    console.log(`id: ${id}`);
}
printId('abc');
printId(101);
function printIdFn(id) {
    if (typeof id === 'string') {
        console.log('id is a string: ', id.toUpperCase());
    }
    else {
        console.log(`id is a number: ${id}`);
    }
}
printIdFn(1);
let person = {
    name: 'abc',
    age: 10,
    greet() {
        console.log('Hi');
    },
};
person.greet();
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
console.log('add 2 numbers: ', add(1, 2));
console.log('subtract 2 numbers: ', subtract(5, 4));
let userId = 'abc';
let person1 = {
    name: 'abc',
    age: 12
};
console.log(person1.name);
let userId1 = 'abc';
let orderId = 101;
let myCustomer = {
    name: 'X',
    address: 'abc',
};
let myCar = {
    make: 'TATA',
};
let add1 = (x, y) => x + y;
console.log(add1(2, 2));
let userStatus = 'active';
let tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
        }
    ]
};
let config = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};
import { add2Nos } from "./utils";
console.log(add2Nos(2, 3));
//# sourceMappingURL=index.js.map