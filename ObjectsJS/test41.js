'use strict'

let user = {
  name: "Василий Иванович",
  age: 35
};

const json = JSON.stringify(user);
const newuser = JSON.parse(json);

alert(json);