'use strict'
function ucFirst(str){
  if (!str) 
    return str; // проверка на пустую строку. иначе str[0] вернет undefined
  const firstChar = str[0].toUpperCase();
  return firstChar+str.slice(1);
};

alert( ucFirst('вася') );



