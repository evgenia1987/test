'use strict'

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj) {

  let max = 0;
  let maxName = null;

  for (const [key, value] of Object.entries(obj)) {
    if (value > max) {
      max = value;
      maxName = key;
    }        
  }
  return maxName;
}

alert (topSalary(salaries)); // Pete