"use strict";
function genericIdentity(arg) {
    return arg;
}
console.log(genericIdentity(10));
console.log(genericIdentity('Hi'));
console.log(genericIdentity(true));
let keyPairValue = {
    key: 'pair',
    value: 10
};
function getLength(item) {
    return item.length;
}
console.log(getLength('Hello'));
console.log(getLength([1, 2, 3]));
class Box {
    constructor(value) {
        this.contents = value;
    }
    getContents() {
        return this.contents;
    }
}
const numberBox = new Box(100);
console.log(numberBox.getContents());
const stringBox = new Box('Hello');
console.log(stringBox.getContents());
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    getStack() {
        return this.items;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getStack());
console.log(numberStack.pop());
console.log(numberStack.getStack());
const stringStack = new Stack();
stringStack.push('Hi');
stringStack.push('There');
console.log(stringStack.getStack());
console.log(stringStack.pop());
console.log(stringStack.getStack());
//# sourceMappingURL=generics.js.map