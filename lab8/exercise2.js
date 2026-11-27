'use strict'

const store = (value) => () => value;


const read = store(7);
const value = read();
console.log(value); // 7