'use strict';

var promise = new Promise(function (resolve, reject) {
  // Your solution here
  setTimeout(() => {
    resolve('FULFILLED!')
  }, 300)
})
  .then(console.log);
  