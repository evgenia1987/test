'use strict'
function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b));
}

const arr = [5, 3, 8, 1];

const filtered = filterRange(arr, 1, 5);

alert( filtered ); 

alert( arr ); 
