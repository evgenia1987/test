'use strict'
let styles = ['Джаз','Блюз'];
styles.push ('Рок-н-ролл');
alert(styles);
styles[Math.round(styles.length/2-1)] = 'Классика';
alert(styles);
alert(styles.shift());
alert(styles);
styles.unshift('Рэп','Регги');
alert(styles);



