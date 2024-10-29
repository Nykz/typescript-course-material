"use strict";
const updateUser = (user) => {
    console.log(user);
};
updateUser({ name: 'Diya' });
updateUser({ email: 'diya@gmail.com' });
let user123 = {
    name: 'Diya'
};
let user1234 = {
    name: 'Diya',
    age: 10,
    email: 'diya@gmail.com'
};
user1234.age = 19;
let usr = {
    name: 'Diya',
    age: 10,
    email: 'diya@gmail.com'
};
const userInfo = {
    name: 'Diya',
    email: 'diya@gmail.com',
};
const userOmitInfo = {
    name: 'Diya',
    age: 10,
};
const userRecordInfo = {
    name: 2,
};
const userRoles = {
    admin: 'Diya',
    user: 'Prem',
    guest: 'Sujal'
};
console.log(userRoles.admin);
const stat1 = 'success';
const stat2 = 'loading';
const statE = 'error';
const userNull = 'Diya';
function getType() {
    return { name: 'Diya', age: 19 };
}
const userType = { name: 'Alice', age: 30 };
function updateUserData(name, age) {
    console.log(`${name}, ${age}`);
}
const params = ['Diya', 20];
class UserCData {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const userCParams = ['Diya', 20];
//# sourceMappingURL=utility_types.js.map