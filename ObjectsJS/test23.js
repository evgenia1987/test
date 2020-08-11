'use strict'
function copySorted(arr) {
    const cpArr = arr.slice();
    return cpArr.sort();
}

const arr = ["HTML", "JavaScript", "CSS"];

const sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)