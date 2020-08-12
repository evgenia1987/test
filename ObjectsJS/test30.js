'use strict'
const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 29 };

const arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    return users.reduce((sum,current) => sum + current.age, 0)/users.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28