'use strict'

const contract = (fn, ...types) => (...args) => {
  if (args.length !== types.length - 1) {
    throw new TypeError(`Expected ${types.length - 1} arguments, got ${args.length}`);
  }

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const def = types[i];
    const name = def.name.toLowerCase();
    if (typeof arg !== name) {
      throw new TypeError(`Argument ${i + 1} type ${name} expected, got ${typeof arg}`);
    }
  }

  const res = fn(...args);
  const resDef = types[types.length - 1];
  const resName = resDef.name.toLowerCase();
  if (typeof res !== resName) {
    throw new TypeError(`Result type ${resName} expected, got ${typeof res}`);
  }

  return res;
};


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Hello world!

// Приклад спрацювання винятку:
// addNumbers(2, '3'); // TypeError: Argument 2 type number expected, got string