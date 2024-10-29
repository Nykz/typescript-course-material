/* generics
 Generics are a way to create components (functions, classes or interfaces)
 that work with different types without losing type safety
*/

// generic function
function genericIdentity<T>(arg: T): T {
    return arg;
}

console.log(genericIdentity<number>(10));
console.log(genericIdentity<string>('Hi'));
console.log(genericIdentity<boolean>(true));

// generic interface
interface KeyPair<T, U> {
    key: T;
    value: U;
}

let keyPairValue: KeyPair<string, number> = {
    key: 'pair',
    value: 10
};

// generic constraints
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength('Hello'));
console.log(getLength([1, 2, 3]));
// console.log(getLength(123));

// generic classes
class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

const numberBox = new Box(100);
console.log(numberBox.getContents());

const stringBox = new Box('Hello');
console.log(stringBox.getContents());


class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    getStack(): T[] {
        return this.items;
    }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getStack());
console.log(numberStack.pop());
console.log(numberStack.getStack());

const stringStack = new Stack<string>();
stringStack.push('Hi');
stringStack.push('There');
console.log(stringStack.getStack());
console.log(stringStack.pop());
console.log(stringStack.getStack());