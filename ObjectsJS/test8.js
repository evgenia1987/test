'use strict'
function Accumulator(startingValue){
  
  this.value = startingValue;

  this.read = function(){
    this.customValue = +prompt ("введите число", '' );
    this.value = this.value + this.customValue;
  };
}

let accumulator = new Accumulator(1); 
accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); 