'use strict'
const summator = {
  read(){
      this.a = +prompt ("введите первое число", '' );
      this.b = +prompt ("введите второе число", '' );
  },
  sum(){
    if (isFinite(this.a)&&isFinite(this.b))
      return this.a + this.b;
    else
      return false;
  },
};

summator.read();
alert(summator.sum());
