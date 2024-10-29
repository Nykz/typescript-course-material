"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}, and I'm ${this.age} yrs old`;
    }
}
const new_person = new Person('Diya', 19);
console.log(new_person.greet());
console.log(new_person.name);
class Car1 {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getModel() {
        return this.model;
    }
}
const newCar = new Car1('Tesla', 'Model 10', 2024);
console.log(newCar.getModel());
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log('Some generic sound...');
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
}
const dog = new Dog('Puppy');
dog.makeSound();
class Shape {
    printArea() {
        console.log(`The area is ${this.getArea()}`);
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(5, 10);
rect.printArea();
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value <= 0) {
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }
}
const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 12;
console.log(circle.radius);
//# sourceMappingURL=classes.js.map