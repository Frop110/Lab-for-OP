'use strict';
const mass = [true, 'hello', 5, 12, -200, false, false, 'word', 'right', 'left', 'Marvel', 13, 'float', true, 'Sadie Sink', 56.2, 'ambition'];

let type = {
    number: 0,
    boolean: 0,
    string: 0,
};

for(let item of mass) {
    let itemType = typeof item

    if(itemType === "number") {
        type.number++;
    }

    if(itemType === "string") {
        type.string++;
    }

    if(itemType === "boolean") {
        type.boolean++;
    }
}

console.log(type); //{number: 5, boolean: 4, string: 8}