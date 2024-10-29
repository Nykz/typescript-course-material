class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name}, and I'm ${this.age} yrs old`;
    }
}

const new_person = new Person('Diya', 19);
console.log(new_person.greet());
console.log(new_person.name);

/* 
access modifiers (public, private, protected)

public: Accessible from anywhere. This is the default if no modifier is specified.
private: Accessible only within the class.
protected: Accessible within the class and its subclasses.
*/

class Car1 {
    public make: string;
    private model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getModel(): string {
        return this.model;
    }
}

const newCar = new Car1('Tesla', 'Model 10', 2024);
console.log(newCar.getModel());
// console.log(newCar.model);

// inheritance

class Animal { // parent class
    
    constructor(
        public name: string
    ) {}

    makeSound(): void {
        console.log('Some generic sound...');
    }
}

class Dog extends Animal { // child class

    constructor(name: string) {
        super(name);
    }

    // makeSound(): void {
    //     console.log('Woof! Woof!');
    // }

}

const dog = new Dog('Puppy');
dog.makeSound();

// Abstract class

abstract class Shape {
    abstract getArea(): number; // abstract method, must be implemented bt subclasses

    printArea(): void {
        console.log(`The area is ${this.getArea()}`);
    }
}

class Rectangle extends Shape {

    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }

}

const rect = new Rectangle(5, 10);
rect.printArea();

// setters & getters

class Circle {
    private _radius: number;
    strlength: number | undefined;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if(value <= 0) {
            throw new Error('Radius must be positive');
        }
        this._radius = value;
    }
}

const circle = new Circle(10);
console.log(circle.radius);
circle.radius = 12;
console.log(circle.radius);
// circle.radius = -5;
// console.log(circle.radius);
circle.strlength = 2;
console.log(circle!.strlength); // Non-null assertion