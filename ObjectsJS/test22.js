'use strict'
function decreaseSort(a, b) {
    return b-a;
}

const arr = [5, 2, 1, -10, 8];
arr.sort(decreaseSort);

alert( arr ); // [8, 5, 2, 1, -10]