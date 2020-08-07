'use strict'
function isEmpty(obj){
    let noProp = true;
    for (let key in obj){
        noProp = noProp && (obj[key]===undefined);
    }
    return noProp;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false