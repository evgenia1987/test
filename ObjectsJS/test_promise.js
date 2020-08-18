  "use strict";

  function delay(ms) {
      return new Promise(function(resolve, ms){
        setTimeout(() => resolve("done!"), ms);     

    });
  }

  //delay(3000).then(
  //  result => alert(result) // выведет "done!" через три секунды
  //);

  delay(3000).then(() => alert('выполнилось через 3 секунды'));

