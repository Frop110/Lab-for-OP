'use strict'

const removeElements = (array, ...items) => {
  const filtered = array.filter((el) => !items.includes(el));
  array.splice(0, array.length, ...filtered);
};


const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array1, 5, 1, 6);
console.log(array1); // [2, 3, 4, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array2, 'Lima', 'Berlin', 'Kiev');
console.log(array2); // ['Beijing', 'Saratov']