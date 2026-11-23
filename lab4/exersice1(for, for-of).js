'use strict'

function sum1(...arg) {
    let arr = 0;
    for(let i = 0; i < arg.length; i++) {
        arr += arg[i]; 
    }
    return arr;
};


function sum2(...arg) {
    let arr1 = 0;
    for(const args of arg) arr1 += args;
    return arr1;
};

const a = sum1(1, 2, 3);
const b = sum1(0);

console.log(a); // 6
console.log(b); // 0