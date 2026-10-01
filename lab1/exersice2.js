'use strict'

const inc2 = (num) => {
    num.n++;
} 

const obj = {n: 5};
inc2(obj);
console.log(obj); // {n: 6}