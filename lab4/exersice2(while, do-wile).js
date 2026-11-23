'use strict'

function sum(...arg) {
    let arr = 0;
    while(arg.length > 0) {
        arr += arg.pop();
    }
    return arr;
};

function sum1(...arg) {
    let arr1 = 0;
    do {
        arr1 += arg.pop();
    } while(arg.length > 0);
    return arr1;
};

const c = sum();
const d = sum(1, -1, 1);

console.log(c); // 0
console.log(d); // 1