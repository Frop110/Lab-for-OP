'use strict';

function range (start, end) {
    const result = [];
    for( let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};
const ran1 = range(15, 30);
console.log(ran1);
/*[
  15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26,
  27, 28, 29, 30
]*/
function rangeOdd (start, end) {
    const result = [];
    for(let i = start; i <= end; i++) {
       if(i % 2 !==0) {
          result.push(i);
        }
    }
    return result;
};
const ran2 = rangeOdd(15, 30);
console.log(ran2);
/*[
  15, 17, 19, 21,
  23, 25, 27, 29
]*/