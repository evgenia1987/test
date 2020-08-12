'use strict'
function Calculator() {
    this.methods = {
        "-" : (a,b) => a - b,
        "+" : (a,b) => a + b
    };
    
    this.calculate = function(str) {

        if ((!str) && (typeof str == 'string')) {
            return str;
        }

        const arr = str.split(' '),
        a = Number(arr[0]),
        op = arr[1],
        b = Number(arr[2]);

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
       
        return this.methods[op](a,b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func; // вот тут не совсем поняла из какого правила языка следует такая запись (((
    };
}

const powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

const result = powerCalc.calculate("2 ** 3");
alert( result ); // 8