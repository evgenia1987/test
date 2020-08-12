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
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

const powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

const result = powerCalc.calculate("2 ** 3");
alert( result ); // 8