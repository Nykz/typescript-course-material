/* 
What are decorators? 
Decorators are a special kind of declaration 
that can be attached to classes, methods, or properties, 
allowing you to modify their behavior in a declarative way. 
Decorators are widely used in frameworks like Angular 
to annotate and configure classes and methods.

Decorators provide a way to add metadata to classes, methods, properties, or parameters. 
This metadata can be used for various purposes, such as:

Documentation: Decorators can describe the behavior or purpose of a class or method.
Framework Integration: Many frameworks (like Angular) use decorators to annotate classes and methods, making it clear how they should be used.

types: 
class decorator
method decorator
accessor & property decorator
parameter decorator
*/

// class decorators

function Logger(constructor: Function) {
    console.log(`Logging creation of class: ${constructor.name}`);
}

@Logger
class People {
    constructor(public name: string) {}
}

const p = new People('Diya');
// console.log(p);

// Method decorators
function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method called: ${propertyKey}`);
        return originalMethod.apply(this, args);
    }
}

class CalcOp {

    @LogMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

const calcOp = new CalcOp();
console.log(calcOp.add(5, 4));



// accessor & property decorator
function ReadOnly(target: any, propertyKey: string) {
    Object.defineProperty(target, propertyKey, {
        writable: false,
    });
}

class Cars {

    private _brand: string = 'Tesla';

    @ReadOnly
    get brand() {
        return this._brand;
    }

    set brand(value: string) {
        this._brand = value;
    }
}

const myCars = new Cars();
myCars.brand = 'Tata'; // cannot write
console.log(myCars.brand);



// parameter decorators

function LogParameter(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter in method ${propertyKey} at index ${parameterIndex}`);
}


class UserParam {
    createUser(
        @LogParameter name: string, 
        @LogParameter age: number
    ) {
        console.log(`User: ${name}, Age: ${age}`);
    }
}

const userParam = new UserParam();
userParam.createUser('Diya', 20);

// practice problem: create a method decorator that logs the time taken for the execution of a method

function LogExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originalMethod.apply(this, args);
        const end = performance.now();
        console.log(`Execution time for ${propertyKey}: ${end - start}ms`);
        return result;
    }
}

class MathOps {

    @LogExecutionTime
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const mathOps = new MathOps();
console.log(mathOps.multiply(2, 5));