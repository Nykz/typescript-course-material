"use strict";
function printID(id) {
    if (typeof id === 'string') {
        console.log(`id is a string: ${id}`);
    }
    else {
        console.log(`id is a number: ${id}`);
    }
}
class Dog1 {
    bark() {
        console.log('Woof!');
    }
}
class Cat1 {
    meow() {
        console.log('Meow!');
    }
}
function handlePet(pet) {
    if (pet instanceof Dog1) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
function isString(value) {
    return typeof value === 'string';
}
function checkType(value) {
    if (isString(value)) {
        console.log('value is string');
    }
    else {
        console.log('value is number');
    }
}
checkType(10);
//# sourceMappingURL=type_guards.js.map