'use strict'
function camelize(str) {
    if ((!str) && (typeof str == 'string')) 
        return str; // проверка на пустую строку
    const arr = str.split('-');
    const upperArr = arr.map(
        (item,index) => index == 0? item : item[0].toUpperCase() + item.slice(1)
    )
    return upperArr.join('');
}
alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));