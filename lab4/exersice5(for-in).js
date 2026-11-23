'use strict'

function ages(persons) {
    let res = {};
    for(let item in persons){
        let age = persons[item].died - persons[item].born;
        res[item] = age;
    }
    return res;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons)); // {lenin: 54, mao: 83, gandhi: 79, hirohito: 88}