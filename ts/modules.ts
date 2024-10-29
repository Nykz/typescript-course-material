// modules (import / export)

// import { add2Nos, PI } from "./utils";
// import { Calculator } from './utils';
// import { Calculator as Calc } from './utils'; // aliasing imports
import * as Utils from './utils';

import log from './utils'; // default export

console.log(Utils.add2Nos(2, 3));

console.log(Utils.PI);

// const calc = new Calculator();
// const calc = new Calc();
const calc = new Utils.Calculator();
console.log(calc.add(3, 4));
console.log(calc.divide(4, 2));

// default exports
log('default export');