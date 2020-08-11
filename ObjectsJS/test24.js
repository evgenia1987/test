'use strict'
function Calculator() {
    this.calculate = function(str) {
        const arr = str.split(' ');
        const arrNumbers = arr.filter(item => parseInt(item));

        return arr[1] == '+' ? Number(arrNumbers[0]) + Number(arrNumbers[1]) : arrNumbers[0] - arrNumbers[1];
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("3 - 7") ); // 21