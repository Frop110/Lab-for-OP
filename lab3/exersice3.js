'use strict';

const ipToInt =  (ip = '127.0.0.1') => {
    return ip
    .split('.') // Розбиваємо рядок на масив рядків
    .reduce((acc, byte, index ) => {
        const num = Number(byte); // Перетворюємо рядок на число
        const shift = (3 - index) * 8; // Зсув: для 0-го елемента 24, для 1-го 16 і т.д.
        return acc + (num << shift);
    }, 0);

};

console.log(ipToInt('127.0.0.1')); //2130706433
console.log(ipToInt('10.0.0.1')); //167772161
console.log(ipToInt('192.168.0.1')); //-1062731775