'use strict';

const fn = () => {
    const person = {name: 'Sadie'};
    let person2 = {name: 'Robert'};

    person.name = 'Emma';
    person2.name = 'Kevin';

    //person = {name: 'Roudi'}; Це викличе помилку: в const не можна змінювати саме посилання
    person2 = {name: 'Tony'};

    return {person, person2};
};
console.log(fn()); //{ person: { name: 'Emma' }, person2: { name: 'Tony' } }
const createUser = (name, city) => ({name, city});
console.log(createUser('Johny', 'London')); //{ person: { name: 'Emma' }, person2: { name: 'Tony' } }