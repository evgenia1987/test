'use strict'
function isEmpty(obj){
    for (let key in obj){
        return false; // если вошли в тело цикла, значит свойства у объекта есть
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false