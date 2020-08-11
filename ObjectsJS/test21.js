'use strict'
function filterRangeInPlace(arr, a, b) {
    /*arr.forEach((item,index) => {
       if (item < a || item > b) 
        arr.splice(index,1);
    }*/ //можно как-то сделать эту задачу с помощью foreach? 
    for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if (item < a || item > b) {  
            arr.splice(index,1);
            index--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1]
