// type guards
// typeof
// instanceof
// custom type guard fn

function printID(id: string | number) {
    if(typeof id === 'string') {
        console.log(`id is a string: ${id}`);
    } else {
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

function handlePet(pet: Dog1 | Cat1) {
    if(pet instanceof Dog1) {
        pet.bark();
    } else {
        pet.meow();
    }
}

interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
}


function isString(value: any): value is string {
    return typeof value === 'string';
}

function checkType(value: string | number) {
    if(isString(value)) {
        console.log('value is string');
    } else {
        console.log('value is number');
    }
}

checkType(10);