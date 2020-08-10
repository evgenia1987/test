'use strict'
function readNumber(){
  let a;
  do{
  a = prompt ("введите число", '0' );
  }while (!isFinite(a));
  if (a === null|| a === '')
    return null;
  return +a;
};

alert(`Число: ${readNumber()}`);



