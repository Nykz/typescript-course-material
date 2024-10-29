"use strict";
let order = "pending";
let answer;
answer = 'no';
let count;
count = 0;
let isVisible;
isVisible = true;
function takeAction(action) {
    switch (action) {
        case 'add':
            console.log('add function');
            break;
        case 'update':
            console.log('update function');
            break;
        case 'delete':
            console.log('delete function');
            break;
        default:
            console.log('none');
            break;
    }
}
function printStatus(status) {
    console.log(`Current state is ${status}`);
}
printStatus('success');
const btn = {
    size: 'medium',
    color: 'green',
};
//# sourceMappingURL=literal_types.js.map