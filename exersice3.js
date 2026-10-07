'use strict';

const average = (a, b) => (a + b) / 2;
const square = (x) => x * x;
const cube = (y) => y ** 3;

const calculate = () => {
    const result = [];
    for(let i = 0; i <= 9; i++) {
        result.push(average(square(i), cube(i)));
    }
    return result;
}
console.log(calculate ());
/*[
   0,   1,   6,  18,  40,
  75, 126, 196, 288, 405
]*/
