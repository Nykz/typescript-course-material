// index signature
/*
An index signature in TypeScript is used to define types for objects 
that can have properties of dynamic keys, where the keys are not 
known in advance but you still want to enforce the type of the values. 
Index signatures are particularly useful when working with objects 
that act like dictionaries or maps.
*/

interface StringArray {
    [index: number]: string;
}

let array1: StringArray = ['Code', 'with', 'Technyks'];
console.log(array1[2]);

interface Fruit {
    [key: string]: string;
}

const fruitsArray: Fruit = {
    apple: 'A fruit',
    banana: 'A yellow fruit',
};

console.log(fruitsArray["banana"]);