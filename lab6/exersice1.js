'use strict'

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('All arguments to pipe must be functions');
    }
  }

  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f1 = pipe(inc, twice, cube);
console.log(f1(5)); // 1728  (((5 + 1) * 2) ** 3)

const f2 = pipe(inc, inc);
console.log(f2(7)); // 9     (7 + 1 + 1)

// Викине TypeError одразу в цьому рядку, не чекаючи виклику f3():
const f3 = pipe(inc, 7, cube);
console.log(f3(3));