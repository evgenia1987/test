'use strict'
function checkSpam(str){
const uppstr = str.toUpperCase();
return uppstr.includes('VIAGRA',0)||uppstr.includes('XXX',0);
};

alert(checkSpam('buy ViAgRA now')); //== true
alert(checkSpam('free xxxxx')); //== true
alert(checkSpam("innocent rabbit")); //== false


