'use strict';

const random = (min, max) => {
   if(max === undefined) {  
    max = min;
    min = 0;     
   } // Якщо ми задаємо лише один аргумент, він по стандару йде в min, a max залишається пустим, то ж при виводі отримаємо NaN
   return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(random(1, 10)); 
console.log(random(5, 50)); 
console.log(random(6));
