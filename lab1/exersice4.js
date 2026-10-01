'use strict';
const mass = [true, 'hello', 5, 12, -200, false, false, 'word', 'right', 'left', 'Marvel', 13, 'float', true, 'Sadie Sink', 56.2, 'ambition'];
let type2 = {};

for(let item of mass) {
    let type = typeof item;
    // якщо type2[type] вже існує, беремо його значення, 
    // якщо ні — беремо 0, і додаємо 1
    type2[type] = (type2[type] || 0) + 1;
}
console.log(type2); //{boolean: 4, string: 8, number: 5}
