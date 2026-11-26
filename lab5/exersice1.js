'use strict'

const seq = (...args) => {
  const funcs = [...args];

  const chain = (...next) => {
    if (typeof next[0] === 'number') {
      return funcs.reduceRight((acc, fn) => fn(acc), next[0]);
    }
    funcs.push(...next);
    return chain;
  };

  return chain;
};

console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
); // 17

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
); // 24

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
); // 3