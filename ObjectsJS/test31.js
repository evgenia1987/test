'use strict'

function unique(arr) {
    const uniq = [];
    for (let el of arr){
        if (!uniq.includes(el)) {
            uniq.push(el);
        }
    }

    return uniq;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O