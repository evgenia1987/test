'use strict'
function Calculator() {
    this.methods = {
        "-" : (a,b) => a - b,
        "+" : (a,b) => a + b
    };
    this.calculate = function(str) {
        const arr = str.split(' '),
        a = Number(arr[0]),
        op = arr[1],
        b = Number(arr[2]);
       
        return this.methods[op](a,b);
    };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("3 - 7") ); // -4