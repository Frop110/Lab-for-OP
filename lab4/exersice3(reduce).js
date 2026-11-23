'use strict'

function sum1(...arg) {
    let arr1 = 0;
    arr1 = arg.reduce((acc, value) => acc + value);
    return arr1;
}

const e = sum1(10, -1 , -1, -1);

console.log(e); // 7