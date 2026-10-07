'use strict';

const contacts = [
    {name: 'Billy', phone: '+380674331337'},
    {name: 'Tom', phone: '+380998183056'},
    {name: 'Sadie', phone: '+380694140027'},
    {name: 'Emily', phone: '+380948762341'}
]

const findPhoneByName = name =>{
    for(const obj of contacts) {
        if(obj.name === name){
            return obj.phone;
        }
    }
};

console.log('Phone:', findPhoneByName('Tom')); //Phone: +380998183056

const phoneBook = {
    Marcus: '+380966778943',
    Taddy: '+380635417742',
    Vlad: '+380998321129'
}
const findPhoneByNameInHash = name => phoneBook[name];
console.log('Phone:', findPhoneByNameInHash('Marcus')); //Phone: +380966778943