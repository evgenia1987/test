'use strict'

//const date = new Date(2012, 1, 20, 3, 12, 0, 0);
//alert(date);

function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      alert('вс');
      break;
    case 1:
      alert('пн');
    case 2:
      alert('вт');
      break;
    case 3:
      alert('ср');
      break;
    case 4:
      alert('чт');
      break;
    case 5:
      alert('пт');
      break;
    case 6:
      alert('сб');
      break;
  }
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
getWeekDay(date); // вт

