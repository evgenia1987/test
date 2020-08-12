'use strict'

function aclean(arr) {
  const map = new Map();

  for (let word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );