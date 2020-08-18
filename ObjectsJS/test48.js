'use strict'

async function loadJson(url) {
  //return fetch(url)
const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  }


loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404