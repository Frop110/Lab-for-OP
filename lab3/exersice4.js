'use strict';

const method = (iface) => {
    const result = [];
    for(const key in iface) {
        const fn = iface[key];
        if(typeof iface[key] === 'function'){
            const count = fn.length;
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