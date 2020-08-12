'use strict'
const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
const petya = { name: "Петя", surname: "Иванов", id: 2 };
const masha = { name: "Маша", surname: "Петрова", id: 3 };

const users = [ vasya, petya, masha ];

const usersMapped = users.map(item => ({
    fullName : `${item.name} ${item.surname}`,
    id : item.id
}));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин

alert( usersMapped[1].id ); // 2
alert( usersMapped[1].fullName ); // Петя Иванов

alert( usersMapped[2].id ); // 3
alert( usersMapped[2].fullName ); // Маша Петрова