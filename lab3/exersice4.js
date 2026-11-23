'use strict';

const method = (iface) => {
    const result = [];
    for(const key in iface) { // Проходимо по кожному ключу об'єкта
        const fn = iface[key];
        if(typeof fn === 'function'){ // Перевіряємо, чи є це значення функцією
            const count = fn.length; // Беремо к-сть аргументів через .length і назву ключа 
            result.push([key, count]);
        }
            
    }
    return result;
};
const iface = {
    m1: x => [x],
    m2: function (x, y) {return[x, y];},
    m3(x, y, z) {return[x, y, z];}
};
console.log(method(iface));