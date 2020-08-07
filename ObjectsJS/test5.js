'use strict'
let calculator = {
    read(){
        this.a = +prompt ("введите первое число", '' );
        this.b = +prompt ("введите второе число", '' );
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
