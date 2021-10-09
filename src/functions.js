"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// let combinedValues: Function
let combinedValues; //should accept any function that takes two parameters
combinedValues = add; // satisfies above
// combinedValues = printResult // doesn't satisfy above as only takes one parametre
console.log(combinedValues(4, 2));
addAndHandle(3, 11, (result) => { console.log(result); });
//# sourceMappingURL=functions.js.map