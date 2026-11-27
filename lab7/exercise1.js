'use strict'

const removeElement = (array, item) => {
  const filtered = array.filter((el) => el !== item);
  array.splice(0, array.length, ...filtered);
};


const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1); // [1, 2, 3, 4, 6, 7]

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2); // ['Kiev', 'Beijing', 'Saratov']