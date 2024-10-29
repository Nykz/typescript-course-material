"use strict";
function factorial(num) {
    if (num == 0 || num == 1)
        return 1;
    return num * factorial(num - 1);
}
console.log(factorial(8));
function formatUser(user) {
    return `User ${user.name} (${user.age} yrs) can be contacted via ${user.email}`;
}
const user = {
    name: "Alice",
    age: 20,
    email: "alice@gmail.com",
};
console.log(formatUser(user));
function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}
let cart = [
    { price: 100, quantity: 2 },
    { price: 500, quantity: 3 },
];
console.log(calculateTotal(cart));
function getVehicleDetails(vehicle) {
    if (vehicle.type === 'car') {
        console.log(`Car: ${vehicle.make} ${vehicle.model}, Year: ${vehicle.year}`);
    }
    else if (vehicle.type === 'bike') {
        console.log(`BIke: ${vehicle.brand}, CC: ${vehicle.cc}`);
    }
}
let myCarDetails = {
    type: 'car',
    make: 'Tesla',
    model: 'Model 10',
    year: 2024
};
let myBike = {
    type: 'bike',
    brand: 'BMW',
    cc: 400,
};
getVehicleDetails(myCarDetails);
getVehicleDetails(myBike);
//# sourceMappingURL=practice_problems_set1.js.map