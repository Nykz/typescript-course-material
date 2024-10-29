// let a1: number = 1;
// a1 = 10;

// function add1(a: number, b: number): number {
//     return a + b; // type checking
// }

// const y = add1(1, a1);
// console.log(y);

// a1 = y;
// console.log(a1);

// Basic types

let num: number = 1234_564_5646;
let num1: bigint = 12344354355464566456636666456345655436n;
console.log('num: ', num);
console.log('num1: ', num1);

let character: string = 'Code with Technyks';
let isAvailable: boolean = true;

let val: null = null;
// let user;
// console.log(user); // undefined

// object 
let obj: { name: string, age: number } = {
    name: 'Abc', 
    age: 10
};

obj = { ...obj, age: 44, name: 'abc1' };
console.log(obj);

// any type
let numVal: any;
numVal = 1;
numVal = 'a';

function testAnyType(val: any) {
    console.log(val);
}

// Arrays
let numArray: number[] = [1, 2, 3, 4];
let charArray: string[] = ['a', 'b'];
// charArray.forEach(val => val.includes('a'));
// numArray.forEach(val => val.toFixed(2));

// tuples

let arr: [number, string] = [1, 'Alice'];

let coordinates3D: [number, number, number] = [10, 20, 30]; // (x, y, z) axis

// localhost:4200?name=Technyks&phone=1234567890
let userData: [string, number] = ['Technyks', 1234567890];

let response: [number, string] = [200, "Success"]; // http-response
//response.push(0); // drawback of tuple in ts
// console.log('response: ', response);


// enum

// PascalCase
enum Color {
    // APP_NAME = 'my_app_name',
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

console.log(Color.Blue);

let color: Color = Color.Green;
console.log(color);

// const Small = 1;
// const Medium = 2;
// const Large = 3;

// let size = Medium;

// enum Size {
//     Small = 1,
//     Medium,
//     Large
// }

const enum Size {
    Small = 1,
    Medium,
    Large
}

let size: Size = Size.Large;
console.log('size: ', size);

// unknown type

let notSure: unknown = 'a';

if(typeof(notSure) === 'number') {
    notSure.toFixed(2);
} else if(typeof(notSure) === 'string') {
    notSure.length;
}

// never type

function infiniteLoop(): never {
    while(true) {
        // do something endlessly
        console.log(1);
    }
}

function throwError(message: string): never {
    throw new Error(message);
}

// throwError('Something weng wrong');

// void type

function logMessage(message: string): void {
    console.log(message);
    // return undefined;
}


// type inference
let username = 'Nikhil'; // typescript infers the type as string

// type assertions
let someValue: any = 'Hello world';
let strLength: number = (someValue as string).length;
console.log(strLength);

// union types
let id: string | number; // id can either be string or a number
id = 'abc';
id = 101;
// id = true;

function printId(id: string | number) {
    console.log(`id: ${ id }`); // 'id: ' + id
}

printId('abc');
printId(101);

// type narrowing
function printIdFn(id: string | number) {
    if(typeof id === 'string') {
        console.log('id is a string: ', id.toUpperCase());
    } else {
        console.log(`id is a number: ${ id }`); // 'id: ' + id
    }
}
// printIdFn('xyz');
printIdFn(1);


// interface

interface Person44 {
    name: string;
    age: number;
    greet(): void
    // greet: () => void
}

// function greet() {
//     console.log('Hi');
// }

let person: Person44 = {
    name: 'abc',
    age: 10,
    greet() {
        console.log('Hi');
    },
    // greet
};

person.greet();

// interface with Function types
interface MathOp {
    (a: number, b: number): number;
}

const add: MathOp = (x, y) => x + y;
const subtract: MathOp = (x, y) => x - y;

console.log('add 2 numbers: ', add(1, 2));
console.log('subtract 2 numbers: ', subtract(5, 4));

// type alias

// type AliasName = TypeDefinition; // syntax
type UserID = string;

let userId: UserID = 'abc';

type Person1 = {
    name: string;
    age: number;
};

let person1: Person1 = {
    name: 'abc',
    age: 12
}

console.log(person1.name);

type ID = string | number;

let userId1: ID = 'abc';
let orderId: ID = 101;

// interface vs type alias
interface User {
    name: string;
    phone?: number;
}

// interface Customer extends User {
//     address: string;
// }

// let myCustomer: Customer = {
//     name: 'X',
//     phone: 122314345,
//     address: 'abc',
// };

interface User {
    address: string;
}

let myCustomer: User = {
    name: 'X',
    // phone: 122314345,
    address: 'abc',
};


type Vehicle = {
    make: string;
    model?: string;
};

// & -> intersection types
type Car = Vehicle & {
    isElectric?: boolean;
};

let myCar: Car = {
    make: 'TATA',
    // model: 'TATA PUNCH',
    // isElectric: true
};

// type Vehicle = {
//     isElectric: boolean,
// };
// error duplicate type identifier

// let myCar: Vehicle = {
//     make: 'TATA',
//     model: 'TATA PUNCH',
//     isElectric: true, // error
// };

type MathOp1 = (a: number, b: number) => number;
let add1: MathOp1 = (x, y) => x + y;
console.log(add1(2, 2));

type Status = "active" | "inactive" | "pending";

let userStatus: Status = 'active';

type Tree = {
    value: string;
    children?: Tree[];
}

let tree: Tree = {
    value: 'root',
    children: [
        {
            value: 'child1',
            // children: [{ value: 'grandChild', children: [] }]
        }
    ]
}

// intersection types
let config: { server: string; port: number } & { secure: boolean; timeout: number } = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 5000
};